import { useEffect, useState } from 'react'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'

import { useScrollAnimation } from '@/hooks/projects/three/useScroll'

import vertexShader from '../../shaders/project_picture/vertexShader.glsl'
import fragmentShader from '../../shaders/project_picture/fragmentShader.glsl'

function addObjects(scene: THREE.Scene, texture: THREE.Texture, positionY: number, index: number) {
  const geometry = new THREE.PlaneGeometry(1.6 * 1.5, 0.9 * 1.5, 16, 9)

  const material = new THREE.ShaderMaterial({
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 1,
    // wireframe: true,
    uniforms: {
      time: {
        value: 0,
      },
      uTexture: {
        value: texture,
      },
      uDistanceFromCenter: {
        value: 0,
      },
    },
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
  })
  material.needsUpdate = true

  const plane = new THREE.Mesh(geometry, material)
  plane.position.set(0, positionY, 0)
  plane.name = `project_picture_${index}`
  scene.getObjectByName('pictures_container')!.add(plane)
}

export default function ProjectsScene() {
  const { scene } = useThree()
  const { speedRef, positionRef, roundedRef } = useScrollAnimation()

  const [textures, setTextures] = useState<THREE.Texture[]>([])
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  useEffect(() => {
    const loader = new THREE.TextureLoader()
    const textureUrls = [
      '/img/png/projects/abwerkt.png',
      '/img/png/projects/hundred_hands.png',
      '/img/png/projects/lento.png',
      '/img/png/projects/moco_xta.png',
      '/img/png/projects/openclassrooms.png',
      '/img/png/projects/wpme.png',
    ]

    Promise.all(
      textureUrls.map((url) => {
        return new Promise<THREE.Texture>((resolve, reject) => {
          loader.load(url, resolve, undefined, reject)
        })
      }),
    )
      .then((loadedTextures) => {
        setTextures(loadedTextures)
      })
      .catch((error) => {
        console.error('Error loading textures:', error)
      })
  }, [])

  useEffect(() => {
    if (!isLoaded && textures.length > 0) {
      const picturesContainerGroup = new THREE.Group()
      picturesContainerGroup.name = 'pictures_container'
      scene.add(picturesContainerGroup)
      textures.forEach((texture, index) => addObjects(scene, texture, -3 * index, index))
      setIsLoaded(true)
    }
  }, [scene, isLoaded, textures])

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()

    positionRef.current += speedRef.current
    speedRef.current *= 0.8
    roundedRef.current = Math.round(positionRef.current)
    const diff = roundedRef.current - positionRef.current
    positionRef.current += Math.sign(diff) * Math.pow(Math.abs(diff), 0.7) * 0.015

    if (scene.getObjectByName('pictures_container')) {
      scene.getObjectByName('pictures_container')!.position.y = -3 * positionRef.current

      scene.traverse((object) => {
        if (object instanceof THREE.Mesh && object.material instanceof THREE.ShaderMaterial) {
          const distanceFromCenter = Math.abs(object.position.y - 3 * positionRef.current)
          const normalizedDistance = 1 - Math.min(distanceFromCenter, 1)

          object.material.uniforms.time.value = time
          object.material.uniforms.uDistanceFromCenter.value = normalizedDistance

          const scale = 1 - distanceFromCenter * 0.1 + 1
          object.scale.set(scale, scale, scale)
        }
      })
    }
  })

  return null
}
