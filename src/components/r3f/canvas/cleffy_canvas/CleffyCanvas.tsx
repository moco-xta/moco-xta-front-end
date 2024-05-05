import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from '@react-three/drei'
import { Physics } from '@react-three/rapier'

import CleffyScene from './CleffyScene'

import { default as imgConstants } from '@/constants/imgConstants.json'

const INTENSITY = 50
const POSITION = 10

export default function CleffyCanvas() {
  return (
    <Canvas dpr={[1, 2]}>
      <PerspectiveCamera
        makeDefault
        position={[10, 10, 10]}
        fov={55}
        near={0.1}
        far={1000}
      />
      <OrbitControls />
      <ambientLight intensity={0.0} />
      <pointLight
        intensity={INTENSITY}
        position={[POSITION, POSITION, POSITION]}
      />
      <pointLight
        intensity={INTENSITY}
        position={[-POSITION, POSITION, POSITION]}
      />
      <pointLight
        intensity={INTENSITY}
        position={[POSITION, POSITION, -POSITION]}
      />
      <pointLight
        intensity={INTENSITY}
        position={[-POSITION, POSITION, -POSITION]}
      />
      <Suspense>
        <Physics
          /* debug */
          gravity={[0, -1, 0]}
        >
          <CleffyScene />
          <Environment files={imgConstants.HDRS.HERO_ENVIRONMENT} />
        </Physics>
      </Suspense>
    </Canvas>
  )
}
