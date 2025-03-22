import React, { Suspense } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'

import Lights from './lights/Lights'
import ProjectsScene from './ProjectsScene'

import { canvasDefaultValues } from '@/data/projects/three/canvasData'
import CameraWithFloat from '../../lib/camera/CameraWithFloat'
import { cameraDefaultValues } from '@/data/projects/three/cameraData'
// import PostProcessing from './PostProcessing'

export type TProjectCanvas = {
  currentProject: number
  currentCompany: number
}

export default function ProjectsCanvas({ currentProject, currentCompany }: TProjectCanvas) {
  return (
    <Canvas
      {...canvasDefaultValues}
      onCreated={({ scene }) => {
        scene.fog = new THREE.Fog(0x202020, 10, 12)
      }}
    >
      <CameraWithFloat defaultValues={cameraDefaultValues} />
      <Lights />
      <Suspense fallback={null}>
        <ProjectsScene
          currentProject={currentProject}
          currentCompany={currentCompany}
        />
      </Suspense>
      {/* <PostProcessing /> */}
    </Canvas>
  )
}
