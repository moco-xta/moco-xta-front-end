import { useCallback, useEffect, useRef, useState } from 'react'
import { StaticImageData } from 'next/image'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { GPUComputationRenderer } from 'three/examples/jsm/misc/GPUComputationRenderer.js'

type GPUComputationRendererVariable = ReturnType<typeof GPUComputationRenderer.prototype.addVariable>

import vertexShader from '../../shaders/laboratory_introduction/vertexShader.glsl'
import fragmentShader from '../../shaders/laboratory_introduction/fragmentShader.glsl'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

function addModel(scene: THREE.Scene) {
  const loader = new GLTFLoader()

  /* const defaultMaterial = new THREE.ShaderMaterial({
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 1,
    wireframe: true,
    depthTest: true,
    depthWrite: true,
    alphaTest: 0.5,
    uniforms: {
      time: { value: 0 },
      pointSize: { value: 100 },
    },
    vertexShader: testVertexShader,
    fragmentShader: testFragmentShader,
  })
  defaultMaterial.needsUpdate = true */

  // const plane = new THREE.PlaneGeometry(1, 1, 10, 10)
  // const planeMesh = new THREE.Mesh(plane, defaultMaterial)
  // scene.add(planeMesh)
 
  const material = new THREE.ShaderMaterial({
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 1,
    wireframe: true,
    depthTest: true,
    depthWrite: true,
    alphaTest: 0.5,
    uniforms: {
      time: { value: 0 },
      pointSize: { value: 100 },
    },
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
  })
  material.needsUpdate = true

  loader.load(glbConstants.LABORATORY_INTRODUCTION_DOTS, function (gltf) {
    gltf.scenes.forEach((group) => {
      group.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          console.log('dots', child.geometry.attributes.position)

          const geometry = new THREE.BufferGeometry()
          // const number = child.geometry.attributes.position.array.length / 3
          const positions = child.geometry.attributes.position as THREE.BufferAttribute
          geometry.setAttribute('position', positions)
          const points = new THREE.Points(geometry, material)
          scene.add(points)
        }
      })
    })
  })

  loader.load(glbConstants.LABORATORY_INTRODUCTION, function (gltf) {
    gltf.scenes.forEach((group) => {
      group.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          // console.log(child)
          child.material = material
        }
      })
      scene.add(group)
    })
  })
}

export default function LaboratoryIntroductionScene() {
  const { scene, gl } = useThree()

  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  useEffect(() => {
    if (!isLoaded) {
      addModel(scene)
      setIsLoaded(true)
    }
  }, [scene, isLoaded])

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()
  })

  return null
}
