import { MutableRefObject, useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import type { IUniformValue, TUniforms } from '@/types/shaders/types'

import dotsVertexShader from '../../shaders/laboratory_introduction/dots/vertexShader.glsl'
import dotsFragmentShader from '../../shaders/laboratory_introduction/dots/fragmentShader.glsl'

import wireframeVertexShader from '../../shaders/laboratory_introduction/wireframe/vertexShader.glsl'
import wireframeFragmentShader from '../../shaders/laboratory_introduction/wireframe/fragmentShader.glsl'

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
          const geometry = new THREE.BufferGeometry()
          const number = child.geometry.attributes.position.array.length / 3
          const position = child.geometry.attributes.position as THREE.BufferAttribute
          const speed = new THREE.BufferAttribute(new Float32Array(number), 1)
          const offset = new THREE.BufferAttribute(new Float32Array(number), 1)
          const circularOffset = new THREE.BufferAttribute(new Float32Array(number), 1)
          const direction = new THREE.BufferAttribute(new Float32Array(number), 1)
          const press = new THREE.BufferAttribute(new Float32Array(number), 1)
          const radiusOffset = new THREE.BufferAttribute(new Float32Array(number), 1)
          const opacity = new THREE.BufferAttribute(new Float32Array(number), 1)

          for (let i = 0; i < number; i++) {
            offset.setX(i, random(0, 33))
            circularOffset.setX(i, Math.random())
            speed.setX(i, random(0.4, 1))
            direction.setX(i, Math.random() > 0.5 ? 1 : -1)
            press.setX(i, random(0.4, 1))
            // radiusOffset.setX(i, Math.random() * 10)
            radiusOffset.setX(i, random(4, 10))
            opacity.setX(i, random(0.1, 1))
          }

          console.log('circularOffset', circularOffset)

          geometry.setAttribute('position', position)
          geometry.setAttribute('speed', speed)
          geometry.setAttribute('offset', offset)
          geometry.setAttribute('circularOffset', circularOffset)
          geometry.setAttribute('direction', direction)
          geometry.setAttribute('press', press)
          geometry.setAttribute('radiusOffset', radiusOffset)
          geometry.setAttribute('opacity', opacity)

          const points = new THREE.Points(geometry, materialRef.current)
          scene.add(points)
        }
      })
    })
  })

  const material = new THREE.ShaderMaterial({
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 1,
    wireframe: true,
    depthTest: true,
    depthWrite: true,
    // alphaTest: 0.5,
    uniforms: {
      time: { value: 0 },
    },
    vertexShader: wireframeVertexShader,
    fragmentShader: wireframeFragmentShader,
  })
  material.needsUpdate = true

  loader.load(glbConstants.LABORATORY_INTRODUCTION, function (gltf) {
    gltf.scenes.forEach((group) => {
      group.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          // console.log(child)
          child.name = 'laboratory_introduction'
          child.material = material
        }
      })
      scene.add(group)
    })
  })
}

export default function LaboratoryIntroductionScene() {
  const { scene, gl, camera } = useThree()

  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  const raycasterRef = useRef(new THREE.Raycaster())
  const pointsSizeRef = useRef<IUniformValue>({ value: 0 })
  const moveRef = useRef<IUniformValue>({ value: 0 })
  const pointerRef = useRef<{ value: THREE.Vector2 }>({ value: new THREE.Vector2() })
  const mouseRef = useRef<{ value: THREE.Vector3 }>({ value: new THREE.Vector3() })
  const mousePressedRef = useRef<IUniformValue>({ value: 0 })
  const offsetFactorRef = useRef<IUniformValue>({ value: 0 })
  const radiusOffsetFactorRef = useRef<IUniformValue>({ value: 0 })
  const opacityFactorRef = useRef<IUniformValue>({ value: 0 })

  const uniformsRef = useRef<TUniforms>({
    time: { type: 'f', value: 0 },
    pointSize: { type: 'f', value: pointsSizeRef.current.value },
    move: { type: 'f', value: moveRef.current.value },
    mouse: { type: 'v3', value: mouseRef.current.value },
    mousePressed: { type: 'f', value: mousePressedRef.current.value },
    offsetFactor: { type: 'f', value: offsetFactorRef.current.value },
    radiusOffsetFactor: { type: 'f', value: radiusOffsetFactorRef.current.value },
    opacityFactor: { type: 'f', value: opacityFactorRef.current.value },
  })

  const materialRef = useRef<THREE.ShaderMaterial>(
    new THREE.ShaderMaterial({
      uniforms: uniformsRef.current,
      vertexShader: dotsVertexShader,
      fragmentShader: dotsFragmentShader,
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

  useEffect(() => {
    const onPointerMove = (event: MouseEvent) => {
      pointerRef.current.value.x = (event.clientX / window.innerWidth) * 2 - 1
      pointerRef.current.value.y = -(event.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener('pointermove', onPointerMove)
    return () => window.removeEventListener('pointermove', onPointerMove)
  }, [])

  useEffect(() => {
    const handleMouseDown = () => {
      gsap.to(mousePressedRef.current, { duration: 2, value: 1, ease: 'elastic(1, 0.3)' })
    }

    const handleMouseUp = () => {
      gsap.to(mousePressedRef.current, { duration: 2, value: 0, ease: 'elastic(1, 0.3)' })
    }

    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  useGSAP(() => {
    const timeline = gsap.timeline()

    timeline
      .fromTo(
        offsetFactorRef.current,
        { value: 10 },
        { value: 0, duration: 10, ease: 'power1.out' },
      )
      .fromTo(
        radiusOffsetFactorRef.current,
        { value: 10 },
        { value: 0, duration: 10, ease: 'power1.out' },
        0,
      )
      .fromTo(
        opacityFactorRef.current,
        { value: 0 },
        { value: 1, duration: 10, ease: 'power1.out' },
        0,
      )
  })

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()

    uniformsRef.current.time.value = time
    uniformsRef.current.pointSize.value = pointsSizeRef.current.value
    uniformsRef.current.move.value = moveRef.current.value
    uniformsRef.current.mouse.value = mouseRef.current.value
    uniformsRef.current.mousePressed.value = mousePressedRef.current.value
    uniformsRef.current.offsetFactor.value = offsetFactorRef.current.value
    uniformsRef.current.radiusOffsetFactor.value = radiusOffsetFactorRef.current.value
    uniformsRef.current.opacityFactor.value = opacityFactorRef.current.value

    /* raycasterRef.current.setFromCamera(pointerRef.current.value, camera)
    const model = scene.getObjectByName('laboratory_introduction')
    if (model) {
      const intersects = raycasterRef.current.intersectObject(model, true)
      console.log('intersects', intersects)
    } */

    raycasterRef.current.setFromCamera(pointerRef.current.value, camera)
    const intersects = raycasterRef.current.intersectObjects(scene.children)
    mouseRef.current.value =
      new THREE.Vector3(intersects[0]?.point.x, intersects[0]?.point.y, intersects[0]?.point.z) ??
      new THREE.Vector3()
    /* for (let i = 0; i < intersects.length; i++) {
      console.log('intersects', intersects[i]?.point)
      mouseRef.current.value =
        new THREE.Vector3(
          intersects[i]?.point.x,
          intersects[i]?.point.y,
          intersects[i]?.point.z,
        ) ?? new THREE.Vector3()
    } */
    gl.render(scene, camera)
  })

  return null
}
