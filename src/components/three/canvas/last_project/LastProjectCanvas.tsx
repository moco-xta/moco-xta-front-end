import React from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { Box, OrbitControls, PerspectiveCamera } from '@react-three/drei'

import { canvasDefaultValues } from '@/data/projects/three/last_project/canvasData'

export default function LastProjectCanvas() {
  return (
    <Canvas {...canvasDefaultValues}>
      <PerspectiveCamera
        makeDefault
        position={new THREE.Vector3(0, 0, 10)}
      />
      {/* <OrbitControls enableZoom={false} /> */}
      <Box />
    </Canvas>
  )
}
