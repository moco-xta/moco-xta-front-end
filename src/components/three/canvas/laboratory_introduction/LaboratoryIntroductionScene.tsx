import { MutableRefObject, useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

import type { IUniformValue, TUniforms } from '@/types/shaders/types'

import vertexShader from '../../shaders/laboratory_introduction/vertexShader.glsl'
import fragmentShader from '../../shaders/laboratory_introduction/fragmentShader.glsl'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

function addModel(scene: THREE.Scene, materialRef: MutableRefObject<THREE.ShaderMaterial>) {
  const loader = new GLTFLoader()

  function random(a: number, b: number) {
    return a + (a - b) * Math.random()
    // return (b - a) * Math.random()
  }

  loader.load(glbConstants.LABORATORY_INTRODUCTION_DOTS, function (gltf) {
    gltf.scenes.forEach((group) => {
      group.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          console.log('dots', child.geometry.attributes.position)

          const geometry = new THREE.BufferGeometry()
          const number = child.geometry.attributes.position.array.length / 3
          const position = child.geometry.attributes.position as THREE.BufferAttribute
          const speed = new THREE.BufferAttribute(new Float32Array(number), 1)
          const offset = new THREE.BufferAttribute(new Float32Array(number), 1)

          for (let i = 0; i < number; i++) {
            offset.setX(i, random(0, 33))
            speed.setX(i, random(-1, 1))
          }
          
          geometry.setAttribute('position', position)
          geometry.setAttribute('speed', speed)
          geometry.setAttribute('offset', offset)

          const points = new THREE.Points(geometry, materialRef.current)
          scene.add(points)
        }
      })
    })
  })

  /* loader.load(glbConstants.LABORATORY_INTRODUCTION, function (gltf) {
    gltf.scenes.forEach((group) => {
      group.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          // console.log(child)
          child.material = materialRef.current
        }
      })
      scene.add(group)
    })
  }) */
}

export default function LaboratoryIntroductionScene() {
  const { scene } = useThree()

  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  const pointsSizeRef = useRef<IUniformValue>({ value: 0 })
  const pointsMoveRef = useRef<IUniformValue>({ value: 1 })
  const uniformsRef = useRef<TUniforms>({
    time: { type: 'f', value: 0 },
    pointSize: { type: 'f', value: pointsSizeRef.current.value },
    move: { type: 'f', value: pointsMoveRef.current.value },
  })
  const materialRef = useRef<THREE.ShaderMaterial>(
    new THREE.ShaderMaterial({
      uniforms: uniformsRef.current,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      transparent: true,
      side: THREE.DoubleSide,
      depthTest: true,
      depthWrite: true,
    }),
  )
  materialRef.current.needsUpdate = true

  useEffect(() => {
    if (!isLoaded) {
      addModel(scene, materialRef)
      setIsLoaded(true)
    }
  }, [scene, isLoaded])

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()

    uniformsRef.current.time.value = time
    uniformsRef.current.pointSize.value = pointsSizeRef.current.value
    uniformsRef.current.move.value = pointsMoveRef.current.value
  })

  return null
}
