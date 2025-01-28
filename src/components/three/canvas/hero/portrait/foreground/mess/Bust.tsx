import { useEffect, useMemo, useRef } from 'react'
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

import { getRandomInt } from '@/helpers/mathHelpers'

import glbConstants from '@/constants/assets/glbConstants.json'
import texturesConstants from '@/constants/assets/texturesConstants.json'
import { default as foregroundGroupConstants } from '@/constants/hero/three/portrait/foreground/foregroundGroupConstants.json'

const NUMBER = 4096 * 7

const ATTRIBUTE_NAMES = {
  POSITION: 'position',
  COORDINATES: 'aCoordinates',
  UV: 'aUv',
  SPEED: 'aSpeed',
  OFFSET: 'aOffset',
  DIRECTION: 'aDirection',
  PRESS: 'aPress',
}

const createAttributes = (geometry: THREE.BufferGeometry) => {
  const positions = new THREE.BufferAttribute(new Float32Array(NUMBER * 3), 3)
  const coordinates = new THREE.BufferAttribute(new Float32Array(NUMBER * 3), 3)
  const uv = new THREE.BufferAttribute(new Float32Array(NUMBER * 2), 2)
  const speeds = new THREE.BufferAttribute(new Float32Array(NUMBER), 1)
  const offset = new THREE.BufferAttribute(new Float32Array(NUMBER), 1)
  const direction = new THREE.BufferAttribute(new Float32Array(NUMBER), 1)
  const press = new THREE.BufferAttribute(new Float32Array(NUMBER), 1)

  const sourcePositions = geometry.attributes.position.array
  const sourceUv = geometry.attributes.uv.array

  for (let i = 0; i < NUMBER * 3; i++) {
    const x = sourcePositions[i * 3]
    const y = sourcePositions[i * 3 + 1]
    const z = sourcePositions[i * 3 + 2]

    positions.setXYZ(i, x, y, z)
    coordinates.setXYZ(i, i * 2, i * 2 + 1, 0)
    uv.setXY(i, sourceUv[i * 2], sourceUv[i * 2 + 1])
    speeds.setX(i, getRandomInt({ min: 0.4, max: 1 }))
    offset.setX(i, getRandomInt({ min: -1000, max: 1000 }))
    // direction.setX(i, Math.random() > 0.5 ? 1 : -1)
    direction.setX(i, 1)
    press.setX(i, getRandomInt({ min: 0.4, max: 1 }))
  }

  const newGeometry = new THREE.BufferGeometry()
  newGeometry.setAttribute(ATTRIBUTE_NAMES.POSITION, positions)
  newGeometry.setAttribute(ATTRIBUTE_NAMES.COORDINATES, coordinates)
  newGeometry.setAttribute(ATTRIBUTE_NAMES.UV, uv)
  newGeometry.setAttribute(ATTRIBUTE_NAMES.SPEED, speeds)
  newGeometry.setAttribute(ATTRIBUTE_NAMES.OFFSET, offset)
  newGeometry.setAttribute(ATTRIBUTE_NAMES.DIRECTION, direction)
  newGeometry.setAttribute(ATTRIBUTE_NAMES.PRESS, press)

  return newGeometry
}

export default function Bust() {
  const { scene } = useThree()
  const { timeline } = useGSAPTimelineContext()

  // Load textures
  const texturesUrls = [
    texturesConstants.SKETCHFAB.BUST,
    texturesConstants.SHADERS.GRADIENT_CIRCLE_MASK,
  ]
  const textures: THREE.Texture[] = useLoader(THREE.TextureLoader, texturesUrls).flat()
  useMemo(() => textures.forEach((texture) => (texture.minFilter = THREE.LinearFilter)), [textures])

  // Load GLTF model
  const bustGlb = useGlbLoader(glbConstants.SKETCHFAB.BUST) as GLTF & ObjectMap

  const opacityRef = useRef<{ value: number }>({
    value: 0,
  })
  const pointRef = useRef<THREE.Vector2>(new THREE.Vector2())
  const uniforms = useRef<TUniforms>({
    time: { type: 'f', value: 0 },
    opacity: { type: 'f', value: opacityRef.current.value },
    uTexture: { type: 't', value: textures[0] },
    mask: { type: 't', value: textures[1] },
    mouse: { type: 'v2', value: new THREE.Vector2(0.0, 0.0) },
    mousePressed: { type: 'f', value: 0 },
    move: { type: 'f', value: 0 },
  })

  const materialRef = useRef<THREE.ShaderMaterial>(
    new THREE.ShaderMaterial({
      uniforms: uniforms.current,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      transparent: true,
      side: THREE.DoubleSide,
      depthTest: false,
      depthWrite: false,
    }),
  )

  useEffect(() => {
    const NUMBER = 512
    const NUMBER_SQUARED = Math.pow(NUMBER, 2)
    let INDEX = 0
    const FACTOR = 125

    const geometry = new THREE.BufferGeometry()

    const positions = new THREE.BufferAttribute(new Float32Array(NUMBER_SQUARED * 3), 3)
    const coordinates = new THREE.BufferAttribute(new Float32Array(NUMBER_SQUARED * 3), 3)
    const speeds = new THREE.BufferAttribute(new Float32Array(NUMBER_SQUARED), 1)
    const offset = new THREE.BufferAttribute(new Float32Array(NUMBER_SQUARED), 1)
    const direction = new THREE.BufferAttribute(new Float32Array(NUMBER_SQUARED), 1)
    const press = new THREE.BufferAttribute(new Float32Array(NUMBER_SQUARED), 1)

    function rand(a: number, b: number): number {
      return a + (b - a) * Math.random()
    }

    for (let i = 0; i < NUMBER; i++) {
      const posX = (i - NUMBER / 2) / FACTOR
      for (let j = 0; j < NUMBER; j++) {
        positions.setXYZ(INDEX, posX * 2, ((j - NUMBER / 2) / FACTOR) * 2, 0)
        coordinates.setXYZ(INDEX, i, j, 0)
        speeds.setX(INDEX, rand(0.4, 1))
        offset.setX(INDEX, rand(-1000 / FACTOR, 1000 / FACTOR))
        direction.setX(INDEX, Math.random() > 0.5 ? 1 : -1)
        press.setX(INDEX, rand(0.4, 1))
        INDEX++
      }
    }

    geometry.setAttribute('position', positions)
    geometry.setAttribute('aCoordinates', coordinates)
    geometry.setAttribute('aSpeed', speeds)
    geometry.setAttribute('aOffset', offset)
    geometry.setAttribute('aDirection', direction)
    geometry.setAttribute('aPress', press)

    const points = new THREE.Points(geometry, materialRef.current)
    scene.getObjectByName('mess_group')?.add(points)
  }, [scene])

  useGSAP(
    () => {
      timeline
        .to(
          materialRef.current.uniforms.mousePressed,
          {
            keyframes: {
              '0%': {
                value: 8,
              },
              '50%': {
                value: 0,
              },
              easeEach: 'power1.out',
            },
            duration: foregroundGroupConstants.duration,
          },
          foregroundGroupConstants.label,
        )
        .to(
          opacityRef.current,
          {
            keyframes: {
              '0%': {
                value: 0,
              },
              '50%': {
                value: 1,
              },
              easeEach: 'power1.out',
            },
            duration: foregroundGroupConstants.duration,
          },
          foregroundGroupConstants.label,
        )
    },
    { scope: materialRef },
  )

  useGSAP((_, contextSafe) => {
    if (!contextSafe) return

    const handleMouseDown = contextSafe(() => {
      gsap.to(materialRef.current.uniforms.mousePressed, {
        duration: 0.5,
        value: 7,
        ease: 'power1.out',
      })
      gsap.to(opacityRef.current, {
        duration: 0.5,
        value: 0.5,
        ease: 'power1.out',
      })
    })

    const handleMouseUp = contextSafe(() => {
      gsap.to(materialRef.current.uniforms.mousePressed, {
        duration: 0.5,
        value: 0,
        ease: 'power1.out',
      })
      gsap.to(opacityRef.current, {
        duration: 0.5,
        value: 1,
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
    materialRef.current.uniforms.time.value = clock.elapsedTime
    materialRef.current.uniforms.opacity.value = opacityRef.current.value
    materialRef.current.uniforms.move.value = 0
    materialRef.current.uniforms.mouse.value = pointRef
  })

  return null
}
