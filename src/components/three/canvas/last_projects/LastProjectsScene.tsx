import { useEffect, useState } from 'react'
import * as THREE from 'three'
import { useThree } from '@react-three/fiber'

import { useWindowSize } from '@/hooks/useWindowSize'

import vertexShader from '../../shaders/playground/default/vertexShader.glsl'
import fragmentShader from '../../shaders/playground/default/fragmentShader.glsl'

function addObjects(scene: THREE.Scene) {
  const geometry = new THREE.PlaneGeometry(1.6, 0.9, 16, 9)

  const material = new THREE.ShaderMaterial({
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 1,
    // wireframe: true,
    uniforms: {
      time: {
        value: 0,
      },
    },
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
  })
  material.needsUpdate = true

  const plane = new THREE.Mesh(geometry, material)
  scene.add(plane)
}

export default function LastProjectsScene() {
  const { scene } = useThree()

  const { isSmallScreen } = useWindowSize()

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
    if (!isLoaded) {
      addObjects(scene)
      setIsLoaded(true)
    }
  }, [scene, isLoaded])

  return null
}
