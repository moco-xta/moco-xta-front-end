import React, { Suspense } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'

import Camera from './Camera'
import Lightning from './lightning/Lightning'
import ProjectsScene from './ProjectsScene'

import { canvasDefaultValues } from '@/data/projects/three/canvasData'

export default function ProjectsCanvas() {
  return (
    <Canvas
      {...canvasDefaultValues}
      onCreated={({ scene }) => {
        scene.fog = new THREE.Fog(0x334257, 9, 50)
      }}
    >
      <Camera />
      <Lightning />
      <Suspense fallback={null}>
        <ProjectsScene />
      </Suspense>
    </Canvas>
  )
}
