import React, { Suspense } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'

import Lightning from './lightning/Lightning'
import ProjectsScene from './ProjectsScene'

import { canvasDefaultValues } from '@/data/projects/three/canvasData'
import CameraWithFloat from '../../lib/camera/CameraWithFloat'
import { cameraDefaultValues } from '@/data/projects/three/cameraData'
import PostProcessing from './PostProcessing'

export type TProjectCanvas = {
  currentProject: number
  currentCompany: number
  currentLocation: number
}

export default function ProjectsCanvas({
  currentProject,
  currentCompany,
  currentLocation,
}: TProjectCanvas) {
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
        <ProjectsScene
          currentProject={currentProject}
          currentCompany={currentCompany}
          currentLocation={currentLocation}
        />
      </Suspense>
      <PostProcessing />
    </Canvas>
  )
}
