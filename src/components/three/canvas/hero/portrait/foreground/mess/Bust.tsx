import { MutableRefObject, useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'
import { ObjectMap, useFrame, useLoader, useThree } from '@react-three/fiber'
import { GLTF } from 'three/examples/jsm/Addons.js'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import type { TUniforms } from '@/types/shaders/types'

import { useGSAPTimelineContext } from '@/hooks/animation/useGSAPTimelineContext'
import useGlbLoader from '@/hooks/three/useGlbLoader'

import vertexShader from '@/components/three/shaders/bust/vertexShader.glsl'
import fragmentShader from '@/components/three/shaders/bust/fragmentShader.glsl'

import glbConstants from '@/constants/assets/glbConstants.json'
import texturesConstants from '@/constants/assets/texturesConstants.json'
import { default as foregroundGroupConstants } from '@/constants/hero/three/portrait/foreground/foregroundGroupConstants.json'

const SCALE = 2.5

export type TUniformValue = {
  value: number
}

const texturesUrls = [
  texturesConstants.SKETCHFAB.BUST,
  texturesConstants.SHADERS.GRADIENT_CIRCLE_MASK,
]

function setMaterialOpacity(
  meshRef: MutableRefObject<THREE.Mesh>,
  meshOpacityRef: MutableRefObject<number>,
) {
  if (Array.isArray(meshRef.current.material)) {
    meshRef.current.material.forEach((material) => {
      material.transparent = true
      material.opacity = meshOpacityRef.current
      material.needsUpdate = true
    })
  } else {
    meshRef.current.material.opacity = meshOpacityRef.current
  }
}

function getRandomNumber(a: number, b: number): number {
  return a + (b - a) * Math.random()
}

export default function Bust() {
  const { scene } = useThree()
  const { timeline } = useGSAPTimelineContext()

  // MODEL

  const bustGlb = useGlbLoader(glbConstants.SKETCHFAB.BUST) as GLTF & ObjectMap

  // TEXTURES

  const textures: THREE.Texture[] = useLoader(THREE.TextureLoader, texturesUrls).flat()
  useMemo(() => textures.forEach((texture) => (texture.minFilter = THREE.LinearFilter)), [textures])

  // MESH

  const meshRef = useRef<THREE.Mesh>(null!)

  // POINTS

  const pointsSizeRef = useRef<TUniformValue>({ value: 0 })
  const pointsOpacityRef = useRef<TUniformValue>({ value: 0 })
  const pointsRgbShiftRef = useRef<TUniformValue>({ value: 1 })
  const pointsMoveRef = useRef<TUniformValue>({ value: 1 })
  const pointsAnthropyRef = useRef<TUniformValue>({ value: 1 })
  const uniformsRef = useRef<TUniforms>({
    time: { type: 'f', value: 0 },
    pointSize: { type: 'f', value: pointsSizeRef.current.value },
    opacity: { type: 'f', value: pointsOpacityRef.current.value },
    rgbShift: { type: 'f', value: pointsRgbShiftRef.current.value },
    move: { type: 'f', value: pointsMoveRef.current.value },
    anthropy: { type: 'f', value: pointsAnthropyRef.current.value },
    uTexture: { type: 't', value: textures[0] },
    mask: { type: 't', value: textures[1] },
  })
  const materialRef = useRef<THREE.ShaderMaterial>(
    new THREE.ShaderMaterial({
      uniforms: uniformsRef.current,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      transparent: true,
      side: THREE.DoubleSide,
      depthTest: false,
      depthWrite: false,
    }),
  )

  useEffect(() => {
    if (!bustGlb.scene.children[0]) {
      return
    }

    meshRef.current = bustGlb.scene.children[0] as THREE.Mesh

    const geometry = new THREE.BufferGeometry()

    const number = meshRef.current.geometry.attributes.position.array.length / 3

    const positions = meshRef.current.geometry.attributes.position as THREE.BufferAttribute // Points position
    const coordinates = meshRef.current.geometry.attributes.uv as THREE.BufferAttribute // UV coordinates
    const speed = new THREE.BufferAttribute(new Float32Array(number), 1)
    const offset = new THREE.BufferAttribute(new Float32Array(number), 1)
    const direction = new THREE.BufferAttribute(new Float32Array(number), 1)
    const press = new THREE.BufferAttribute(new Float32Array(number), 1)

    for (let i = 0; i < number; i++) {
      speed.setX(i, getRandomNumber(0.4, 1))
      offset.setX(i, getRandomNumber(-100, 100))
      direction.setX(i, Math.random() > 0.5 ? 1 : -1)
      press.setX(i, getRandomNumber(0.2, 1))
    }

    geometry.setAttribute('position', positions)
    geometry.setAttribute('aCoordinates', coordinates)
    geometry.setAttribute('aSpeed', speed)
    geometry.setAttribute('aOffset', offset)
    geometry.setAttribute('aDirection', direction)
    geometry.setAttribute('aPress', press)

    const points = new THREE.Points(geometry, materialRef.current)
    scene.getObjectByName('mess_group')?.add(points)
  }, [bustGlb, scene])

  useGSAP(
    () => {
      timeline
        .to(
          pointsAnthropyRef.current,
          {
            keyframes: {
              '0%': {
                value: 10,
              },
              '50%': {
                value: 7.5,
              },
              '100%': {
                value: 0,
                ease: 'power1.inOut',
              },
              easeEach: 'power1.in',
            },
            duration: 3,
          },
          foregroundGroupConstants.label,
        )
        .to(
          pointsSizeRef.current,
          {
            keyframes: {
              '0%': {
                value: 0,
              },
              '100%': {
                value: 5,
              },
              easeEach: 'power1.inOut',
            },
            duration: 5,
          },
          foregroundGroupConstants.label,
        )
        .to(
          pointsOpacityRef.current,
          {
            keyframes: {
              '0%': {
                value: 0,
              },
              '100%': {
                value: 1,
              },
              easeEach: 'power1.out',
            },
            duration: 2,
          },
          foregroundGroupConstants.label,
        )
        .to(
          pointsRgbShiftRef.current,
          {
            keyframes: {
              '0%': {
                value: 1,
              },
              '100%': {
                value: 0,
              },
              easeEach: 'power1.in',
            },
            duration: 5,
          },
          foregroundGroupConstants.label,
        )
        .to(
          pointsMoveRef.current,
          {
            keyframes: {
              '0%': {
                value: 10,
              },
              '100%': {
                value: 0,
              },
              easeEach: 'power1.in',
            },
            duration: 5,
          },
          foregroundGroupConstants.label,
        )
    },
    { scope: materialRef },
  )

  /* useGSAP(
    () => {
      timeline
        .to(
          uniformsValuesRef.current,
          {
            keyframes: {
              '0%': {
                pointSize: 0,
                opacity: 0,
                moussePressed: 10,
                rgbShift: 1,
              },
              '35%': {
                moussePressed: 7.5,
              },
              '70%': {
                pointSize: 1,
                opacity: 1,
                moussePressed: 0,
              },
              '100%': {
                rgbShift: 0,
              },
              easeEach: 'power1.in',
            },
            // duration: foregroundGroupConstants.duration,
            duration: 7,
          },
          foregroundGroupConstants.label,
        )
    },
    { scope: materialRef },
  ) */

  useGSAP((_, contextSafe) => {
    if (!contextSafe) return

    const handleMouseDown = contextSafe(() => {
      gsap.to(pointsAnthropyRef.current, {
        duration: 0.5,
        value: 7,
        ease: 'power1.out',
      })
      gsap.to(pointsOpacityRef.current, {
        duration: 0.5,
        value: 0.5,
        ease: 'power1.out',
      })
      gsap.to(pointsRgbShiftRef.current, {
        duration: 0.5,
        value: 1,
        ease: 'power1.out',
      })
    })

    const handleMouseUp = contextSafe(() => {
      gsap.to(pointsAnthropyRef.current, {
        duration: 0.5,
        value: 0,
        ease: 'power1.out',
      })
      gsap.to(pointsOpacityRef.current, {
        duration: 0.5,
        value: 1,
        ease: 'power1.out',
      })
      gsap.to(pointsRgbShiftRef.current, {
        duration: 4,
        value: 0,
        ease: 'power1.out',
      })
    })

    window.addEventListener('mousedown', handleMouseDown, false)
    window.addEventListener('mouseup', handleMouseUp, false)

    return () => {
      window.removeEventListener('mousedown', handleMouseDown, false)
      window.removeEventListener('mouseup', handleMouseUp, false)
    }
  })

  useFrame(({ clock }) => {
    uniformsRef.current.time.value = clock.elapsedTime
    uniformsRef.current.pointSize.value = pointsSizeRef.current.value
    uniformsRef.current.opacity.value = pointsOpacityRef.current.value
    uniformsRef.current.rgbShift.value = pointsRgbShiftRef.current.value
    uniformsRef.current.move.value = pointsMoveRef.current.value
    uniformsRef.current.anthropy.value = pointsAnthropyRef.current.value
  })

  return null
}
