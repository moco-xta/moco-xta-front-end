import React, { Suspense } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Physics } from '@react-three/rapier'

import Camera from './Camera'
import ProjectsScene from './ProjectsScene'
import PostProcessing from './PostProcessing'

import { canvasDefaultValues } from '@/data/projects/three/canvasData'
import Lightning from './lights/Lightning'
import PhysicsGround from './physics/PhysicsGround'
import Player from './Player'

export default function ProjectsCanvas() {
  return (
    <Canvas
      {...canvasDefaultValues}
      // onCreated={(state) => (state.gl.toneMappingExposure = 0.5)}
      onCreated={({ scene }) => {
        scene.fog = new THREE.Fog(0x334257, 5, 30)
      }}
    >
      <Camera />
      <Lightning />
      {/* <OrbitControls target={new THREE.Vector3(-5, 2, 0)} /> */}
      <Physics debug>
        <Player />
        <PhysicsGround />
        <Suspense fallback={null}>
          <ProjectsScene />
        </Suspense>
      </Physics>
      <PostProcessing />
    </Canvas>
  )
}
