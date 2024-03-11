'use client'

import React, { Suspense, useRef } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { OccupySpace } from '../../models/hero/OccupySpace'

function HeroScene() {
  const occupySpaceRef = useRef<THREE.Mesh>(null!)

  return (
    <OccupySpace
      ref={occupySpaceRef}
      scale={[2.5, 2.5, 2.5]}
    />
  )
}

export default function HeroCanvas() {
  return (
    <Canvas
      dpr={1}
      shadows
      legacy
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
          intensity={50}
          castShadow
        />
        <pointLight
          position={[-5, 5, 5]}
          intensity={50}
          castShadow
        />
        <pointLight
          position={[-0, 5, 0]}
          intensity={50}
          castShadow
        />
        <HeroScene />
      </Suspense>
    </Canvas>
  )
}
