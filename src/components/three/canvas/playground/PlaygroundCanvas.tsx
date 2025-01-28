import React, { Suspense } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import PlaygroundScene from './PlaygroundScene'

export default function PlaygroundCanvas() {
  return (
    <Canvas
      dpr={1}
      gl={{ antialias: true, alpha: false, powerPreference: 'high-performance', preserveDrawingBuffer: false }}
      shadows
    >
      <PerspectiveCamera makeDefault position={new THREE.Vector3(0, 0, 8)} />
      <OrbitControls />
      <Suspense fallback={null}>
        <PlaygroundScene />
      </Suspense>
    </Canvas>
  )
}
