import React from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'

import ReelScene from './ReelScene'

import { canvasDefaultValues } from '@/data/reel/three/canvasData'

export default function ReelCanvas() {
  return (
    <Canvas
      {...canvasDefaultValues}
    >
      <PerspectiveCamera
        makeDefault
        position={new THREE.Vector3(-2, 1, 2.5)}
        fov={45}
        near={0.1}
        far={10}
      />
      <ReelScene />
    </Canvas>
  )
}
