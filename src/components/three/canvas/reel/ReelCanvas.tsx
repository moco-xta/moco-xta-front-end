import React from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'

import ReelScene from './ReelScene'

import { canvasDefaultValues } from '@/data/reel/three/canvasData'

export default function ReelCanvas() {
  return (
    <Canvas {...canvasDefaultValues}>
      <PerspectiveCamera
        makeDefault
        position={new THREE.Vector3(0, 0, 5)}
        fov={45}
        near={0.1}
        far={10}
      />
      {/* <OrbitControls /> */}
      <ambientLight intensity={5} />
      <ReelScene />
    </Canvas>
  )
}
