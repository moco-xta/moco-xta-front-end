'use client'

import React, { Suspense } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'

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
          far={70}
        />
      </Suspense>
    </Canvas>
  )
}
