import React, { Suspense } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'

import Lightning from './lightning/Lightning'
import Player from '../../controls/player/Player'
import ProjectsScene from './ProjectsScene'
import PhysicsGround from '../../physics/PhysicsGround'

import { canvasDefaultValues } from '@/data/projects/three/canvasData'
import { cameraDefaultValues } from '@/data/projects/three/cameraData'

export default function ProjectsCanvas() {
  return (
    <Canvas
      {...canvasDefaultValues}
      onCreated={({ scene }) => {
        scene.fog = new THREE.Fog(0x334257, 9, 50)
      }}
    >
      <Lightning />
      <Physics debug>
        <Player cameraDefaultValues={cameraDefaultValues.camera} />
        <Suspense fallback={null}>
          <ProjectsScene />
        </Suspense>
        <PhysicsGround args={[200, 200]} />
      </Physics>
    </Canvas>
  )
}
