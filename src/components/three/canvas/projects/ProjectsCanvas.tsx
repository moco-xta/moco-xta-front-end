import React, { Suspense } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { PointerLockControls } from '@react-three/drei'
import { Physics } from '@react-three/rapier'

import ProjectsScene from './ProjectsScene'
import Lightning from './lights/Lightning'
import Player from './Player'
import PhysicsGround from './physics/PhysicsGround'

import { canvasDefaultValues } from '@/data/projects/three/canvasData'

export default function ProjectsCanvas() {
  return (
    <Canvas
      {...canvasDefaultValues}
      onCreated={({ gl, scene }) => {
        // gl.toneMappingExposure = 0.5
        scene.updateMatrix()
        scene.updateMatrixWorld()
        scene.fog = new THREE.Fog(0x334257, 9, 50)
      }}
    >
      <Lightning />
      <Physics debug>
        <Player />
        <Suspense fallback={null}>
          <ProjectsScene />
        </Suspense>
        <PhysicsGround />
      </Physics>
      <PointerLockControls />
    </Canvas>
  )
}
