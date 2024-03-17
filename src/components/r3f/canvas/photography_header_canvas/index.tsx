import React, { Suspense, useEffect, useRef } from 'react'
import * as THREE from 'three'
import { Canvas, Node, extend, useLoader, useThree } from '@react-three/fiber'
import { Box, Fisheye, Html, shaderMaterial } from '@react-three/drei'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import { default as PhotographsConstants } from '@/constants/photographsConstants.json'

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

function PhotographyHeaderScene() {
  const state = useThree()

  useEffect(() => {
    console.log(state)
  }, [])

  const texture = useLoader(
    THREE.TextureLoader,
    PhotographsConstants.PHOTOGRAPHS[0].SRC,
  )

  return (
    <mesh
      position={new THREE.Vector3(0, 0, 0)}
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
}

export default function PhotographyHeaderCanvas() {
  gsap.registerPlugin(useGSAP)
  const timeline = gsap.timeline()

  const container = useRef<HTMLCanvasElement>(null!)

  useEffect(() => {
    console.log(container)
  }, [])

  /* useGSAP(
    () => {
      timeline.fromTo(
        '#circle',
        {
          r: 0,
          opacity: 0,
        },
        {
          duration: 2,
          ease: 'power3.out',
          r: 450,
          opacity: 1,
        },
      )
      .fromTo(
          '#gradient_in_stop',
          {
            offset: '90%',
          },
          {
            duration: 6,
            ease: 'power3.out',
            offset: '10%',
          }
        )
    },
    { scope: container },
  ) */

  return (
    <Canvas
      ref={container}
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
      {/* <Fisheye zoom={-3}> */}
        <Suspense
          fallback={
            <Html
              center
              children='Loading...'
            />
          }
        >
          <PhotographyHeaderScene />
        </Suspense>
      {/* </Fisheye> */}
    </Canvas>
  )
}
