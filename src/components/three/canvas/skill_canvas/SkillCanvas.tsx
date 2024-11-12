import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'

import SkillScene from './SkillScene'

export default function SkillCanvas() {
  return (
    <Canvas
      dpr={2}
      shadows
      legacy={false}
      linear
      flat
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      }}
      style={{
        zIndex: 2,
        position: 'absolute',
        bottom: 0,
        width: '50vw',
        height: '50vw',
      }}
    >
      <PerspectiveCamera
        makeDefault
        position={[0, 0, 5]}
        fov={55}
      />
      <ambientLight />
      <Suspense>
        <SkillScene />
      </Suspense>
    </Canvas>
  )
}
