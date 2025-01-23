import React, { Suspense } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'

import Camera from './Camera'
import Lightning from './lightning/Lightning'
import ProjectsScene from './ProjectsScene'

import { canvasDefaultValues } from '@/data/projects/three/canvasData'
import CameraWithFloat from '../../lib/camera/CameraWithFloat'
import { cameraDefaultValues } from '@/data/projects/three/cameraData'
import PostProcessing from './PostProcessing'

export type TProjectCanvas = {
  currentProject: number
}

export default function ProjectsCanvas({ currentProject }: TProjectCanvas) {
  return (
    <Canvas
      {...canvasDefaultValues}
      onCreated={({ scene }) => {
        scene.fog = new THREE.Fog(0x000000, 10, 12)
      }}
    >
      <CameraWithFloat defaultValues={cameraDefaultValues} />
      <Lightning />
      <Suspense fallback={null}>
        <ProjectsScene currentProject={currentProject} />
      </Suspense>
      <PostProcessing />
    </Canvas>
  )
}
