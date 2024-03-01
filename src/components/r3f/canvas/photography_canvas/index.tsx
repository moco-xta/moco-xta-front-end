'use client'

import React, { Suspense, createRef, forwardRef, useEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'
import { Canvas, extend, Node, useFrame, useLoader } from '@react-three/fiber'
import {
  Html,
  ScrollControls,
  shaderMaterial,
  useScroll,
} from '@react-three/drei'

import { default as PhotographsConstants } from '@/constants/photographsConstants.json'

import { PhotographyInterface } from '@/interfaces/components/r3f/photographyInterface'

import vertexShader from '@/components/r3f/shaders/photography_shaders/vertexShader.glsl'
import fragmentShader from '@/components/r3f/shaders/photography_shaders/fragmentShader.glsl'

const uniforms = {
  uColor: new THREE.Color(0xffffff),
  uOpacity: 1.0,
  uScale: 0.0,
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
    <mesh position={new THREE.Vector3(0, -index * 20, 0)}>
      <planeGeometry
        attach='geometry'
        args={[14, 10, 32, 32]}
      />
      <photographyMaterial
        ref={ref as any}
        attach='material'
        // @ts-ignore
        uTexture={texture}
      />
    </mesh>
  )
})

function PhotographsScene() {
  const [object, setObject] = useState<{ positive: boolean, offset: number }>({
    positive: false,
    offset: 0,
  })

  const materialRefs = useMemo(
    () =>
      PhotographsConstants.PHOTOGRAPHS.map(() => ({
        ref: createRef(),
      })),
    [],
  )

  const scroll = useScroll()

  const photographsGroupRef = useRef<THREE.Group>(null)

  const textures = useLoader(
    THREE.TextureLoader,
    PhotographsConstants.PHOTOGRAPHS.map((photography) => photography.SRC),
  )
  useMemo(
    () =>
      textures.forEach((texture) => (texture.minFilter = THREE.LinearFilter)),
    [textures],
  )

  /* useEffect(() => {
    console.log(object)
  }, [object]) */

  useFrame(() => {
    if (photographsGroupRef.current)
      photographsGroupRef.current.position.y = scroll.offset * 100
    materialRefs.forEach((materialRef) => {
      /* materialRef.current.uniforms.uShift = object.positive ? { value: Math.pow(scroll.delta * 500, 2) } : { value: -Math.pow(scroll.delta * 500, 2) } */
      // @ts-ignore
        materialRef.current.uniforms.uShift = { value: scroll.delta * 500 }
        /* materialRef.current.uniforms.uShift = { value: Math.pow(scroll.delta * 500, 2) } */
    })

    console.log(Math.pow(scroll.delta * 500, 2))
    // @ts-ignore
    setObject(prevState => {
      return {
        position: prevState.offset > scroll.offset,
        offset: scroll.offset
      }
    })
    /* setObject((prevState) => {
      position: prevState.offset > scroll.offset
      offset: scroll.offset
    }) */
    /* console.log('scroll', scroll) */
  })

  return (
    <group ref={photographsGroupRef}>
      {PhotographsConstants.PHOTOGRAPHS.map((_, index) => (
        <Photography
          ref={materialRefs[index] as any}
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
      camera={{ zoom: 75, position: [0, 0, 1] }}
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
        <ScrollControls
          pages={3}
          damping={0.5}
          maxSpeed={10}
        >
          <PhotographsScene />
        </ScrollControls>
      </Suspense>
    </Canvas>
  )
}
