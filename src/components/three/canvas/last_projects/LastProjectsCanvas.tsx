import React from 'react'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import { OrbitControls, OrthographicCamera } from '@react-three/drei'

import LastProjectsScene from './LastProjectsScene'

import { canvasDefaultValues } from '@/data/projects/three/last_projects/canvasData'

export default function LastProjectsCanvas() {
  return (
    <Canvas {...canvasDefaultValues}>
      <OrthographicCamera
        makeDefault
        position={new THREE.Vector3(0, 0, 1)}
        zoom={200}
      />
      <OrbitControls enableZoom={false} />
      <LastProjectsScene />
    </Canvas>
  )
}
