import { useEffect, useState } from 'react'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

import vertexShader from '../../shaders/last_project/vertexShader.glsl'
import fragmentShader from '../../shaders/last_project/fragmentShader.glsl'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

function addObjects(scene: THREE.Scene, textureUrl: string) {
  // const geometry = new THREE.PlaneGeometry(1.6 * 1.5, 0.9 * 1.5, 160, 90)
  const loader = new GLTFLoader()

  const textureLoader = new THREE.TextureLoader()
  const texture = textureLoader.load(textureUrl)

  const material = new THREE.ShaderMaterial({
    side: THREE.DoubleSide,
    transparent: true,
    // wireframe: true,
    opacity: 1,
    uniforms: {
      time: {
        value: 0,
      },
      uTexture: {
        value: texture,
      },
    },
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
  })
  material.needsUpdate = true

  loader.load(
    glbConstants.PROJECTS.ROUNDED_PLANE,
    function (gltf) {
      console.log(gltf)
      const model = gltf.scenes[0].children[0]
      if (model instanceof THREE.Mesh) {
        model.material = material
        const scale = 0.8
        model.scale.set(scale, scale, scale)
        model.updateMatrix()
      }
      scene.add(model)
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
    },
    function () {
      console.log('An error happened')
    },
  )
}

export default function LastProjectScene({ textureUrl }: { textureUrl: string }) {
  const { scene } = useThree()

  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  useEffect(() => {
    if (!isLoaded) {
      addObjects(scene, textureUrl)
      setIsLoaded(true)
    }
  }, [scene, isLoaded, textureUrl])

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()

    scene.traverse((object) => {
      if (object instanceof THREE.Mesh && object.material instanceof THREE.ShaderMaterial) {
        object.material.uniforms.time.value = time
      }
    })
  })

  return null
}
