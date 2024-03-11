'use client'

import React, { Suspense, useEffect, useRef } from 'react'
import * as THREE from 'three'
import { Canvas, useThree } from '@react-three/fiber'
import { Environment, PerspectiveCamera } from '@react-three/drei'
import { OccupySpace } from '../../models/hero/OccupySpace'

function HeroScene() {
  const occupySpaceRef = useRef<THREE.Mesh>(null!)

  const { gl } = useThree()
  /* gl.toneMapping = THREE.ACESFilmicToneMapping */
  gl.toneMappingExposure = 1.5

  return (
    <OccupySpace
      ref={occupySpaceRef}
      scale={[2.8, 2.8, 2.8]}
    />
  )
}

export default function HeroCanvas() {
  return (
    <Canvas
      dpr={1}
      shadows
      /* legacy={false} */
      linear
      flat
      gl={{
        antialias: true,
        alpha: true,
        preserveDrawingBuffer: true,
      }}
    >
      <Suspense>
        <PerspectiveCamera
          makeDefault
          position={[0, 0, 15]}
          fov={30}
          near={0.1}
          far={55}
        />
        <pointLight
          position={[5, 5, 5]}
          intensity={90}
          castShadow
        />
        <pointLight
          position={[-5, 5, 5]}
          intensity={90}
          castShadow
        />
        <pointLight
          position={[-0, -3, 5]}
          intensity={40}
          castShadow
        />
        <Environment
          preset='city'
          encoding={THREE.sRGBEncoding}
        />
        <HeroScene />
      </Suspense>
    </Canvas>
  )
}
