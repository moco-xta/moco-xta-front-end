'use client'

import React, {
  Suspense,
  createRef,
  forwardRef,
  useEffect,
  useMemo,
  useRef,
} from 'react'
import * as THREE from 'three'
import { Canvas, extend, Node, useFrame, useLoader } from '@react-three/fiber'
import { Html, shaderMaterial } from '@react-three/drei'

import { default as PhotographsConstants } from '@/constants/photographsConstants.json'

import { PhotographyInterface } from '@/interfaces/components/r3f/photographyInterface'

import vertexShader from '@/components/r3f/shaders/photography_shaders/vertexShader.glsl'
import fragmentShader from '@/components/r3f/shaders/photography_shaders/fragmentShader.glsl'

const uniforms = {
  uShift: 0.0,
  uTexture: null,
}

export const PhotographyMaterial = shaderMaterial(
  uniforms,
  vertexShader,
  fragmentShader,
)

extend({ PhotographyMaterial })

declare global {
  namespace JSX {
    interface IntrinsicElements {
      photographyMaterial: Node<
        typeof PhotographyMaterial & JSX.IntrinsicElements['shaderMaterial'],
        typeof PhotographyMaterial
      >
    }
  }
}

const Photography = forwardRef(function Photography(
  { index, texture }: PhotographyInterface,
  ref,
) {
  return (
    <mesh
      ref={ref as any}
      position={new THREE.Vector3(0, -index * 20, 0)}
    >
      <planeGeometry
        attach='geometry'
        args={[1.4, 1, 32, 32]}
      />
      <photographyMaterial
        attach='material'
        // @ts-ignore
        uTexture={texture}
      />
    </mesh>
  )
})

function PhotographsScene() {
  const photographsGroupRef = useRef<THREE.Group>(null)
  const meshRefs = useMemo(
    () =>
      PhotographsConstants.PHOTOGRAPHS.map(() => ({
        ref: createRef<THREE.Mesh>(),
      })),
    [],
  )

  const textures = useLoader(
    THREE.TextureLoader,
    PhotographsConstants.PHOTOGRAPHS.map((photography) => photography.SRC),
  )
  useMemo(
    () =>
      textures.forEach((texture) => (texture.minFilter = THREE.LinearFilter)),
    [textures],
  )

  let position = 0
  let speed = 0
  let rounded = 0
  function handleWheet(e: WheelEvent) {
    speed += e.deltaY * 0.0001
  }
  useEffect(() => {
    window.addEventListener('wheel', handleWheet)
    return () => {
      window.removeEventListener('wheel', handleWheet)
    }
  }, [])

  useFrame((state, delta, xrFrame) => {
    console.log(state)
    position += speed
    speed *= 0.8
    rounded = Math.round(position)
    let diff = rounded - position
    position += Math.sign(diff) * Math.pow(Math.abs(diff), 0.7) * 0.015
    meshRefs.forEach((meshRef, index) => {
      // @ts-ignore
      meshRef.current.position.y = position * 1.2 - index * 1.2
      // @ts-ignore
      /* if(meshRef.current.position.y > (meshRefs.length * 1.2) / 2 + 0.1) meshRef.current.position.y -= meshRefs.length * 1.2 */
      // @ts-ignore
      /* if(index === 0) console.log('position', meshRef.current.position.y) */
    })
  })

  return (
    <group ref={photographsGroupRef}>
      {PhotographsConstants.PHOTOGRAPHS.map((_, index) => (
        <Photography
          ref={meshRefs[index] as any}
          key={`photography_${index}`}
          index={index}
          texture={textures[index]}
        />
      ))}
    </group>
  )
}

export default function PhotographyCanvas() {
  return (
    <Canvas
      legacy
      dpr={1}
      orthographic
      camera={{ zoom: 750, position: [0, 0, 1] }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      }}
    >
      <Suspense
        fallback={
          <Html
            center
            children='Loading...'
          />
        }
      >
        <PhotographsScene />
      </Suspense>
    </Canvas>
  )
}
