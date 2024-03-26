'use client'

import React, { Suspense, useRef } from 'react'
import * as THREE from 'three'
import { Canvas, useThree } from '@react-three/fiber'
import {
  Box,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from '@react-three/drei'
import { MHelliumBalloonLarge } from '../../models/hero/MHelliumBalloonLarge'

function HeroScene() {
  const occupySpaceRef = useRef<THREE.Mesh>(null!)

  /* const { gl } = useThree()
  gl.toneMapping = THREE.ACESFilmicToneMapping
  gl.toneMappingExposure = 1.5 */

  return (
    <MHelliumBalloonLarge
      receiveShadow
      castShadow
    />
  )
}

export default function HeroCanvas() {
  return (
    <Canvas
      dpr={1}
      shadows
      legacy={false}
      /* linear
      flat */
      gl={{
        antialias: true,
        alpha: true,
        preserveDrawingBuffer: true,
      }}
    >
      <PerspectiveCamera
        makeDefault
        position={[0, 0, 15]}
        fov={30}
        near={0.1}
        far={55}
      />
      <OrbitControls />
      <pointLight
        position={[5, 5, 5]}
        intensity={1}
        castShadow
      />
      <pointLight
        position={[-5, 5, 5]}
        intensity={1}
        castShadow
      />
      <pointLight
        position={[-0, -3, 5]}
        intensity={1}
        castShadow
      />
      <Suspense>
        <Environment
          preset='city'
          encoding={THREE.sRGBEncoding}
        />
        <HeroScene />
      </Suspense>
    </Canvas>
  )
}
