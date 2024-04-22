import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'

import ProjectsScene from './scene'

import { default as projectsConstants } from '@/constants/canvas/projectsConstants.json'

export default function ProjectsCanvas() {
  return (
    <Canvas
      dpr={projectsConstants.CANVAS.DPR}
      shadows
      legacy={projectsConstants.CANVAS.LEGACY}
      linear
      flat
      gl={{
        antialias: projectsConstants.CANVAS.GL.ANTIALIAS,
        alpha: projectsConstants.CANVAS.GL.ALPHA,
        powerPreference: projectsConstants.CANVAS.GL.POWER_PREFERENCE,
      }}
    >
      <PerspectiveCamera
        makeDefault
        position={[
          projectsConstants.PERSPECTIVE_CAMERA.POSITION.X,
          projectsConstants.PERSPECTIVE_CAMERA.POSITION.Y,
          projectsConstants.PERSPECTIVE_CAMERA.POSITION.Z,
        ]}
        fov={projectsConstants.PERSPECTIVE_CAMERA.FOV}
      />
      {/* <OrbitControls /> */}
      <ambientLight intensity={1} />
      <pointLight
        intensity={20}
        position={[5, 5, 5]}
        castShadow
      />
      <pointLight
        intensity={20}
        position={[-5, 5, 5]}
        castShadow
      />
      <Suspense>{/* <ProjectsScene projectsRefs={projectsRefs} /> */}</Suspense>
    </Canvas>
  )
}
