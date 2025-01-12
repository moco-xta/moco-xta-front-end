import React, { Suspense } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'

import ProjectsScene from './ProjectsScene'
import Lightning from './lights/Lightning'
import PhysicsGround from './physics/PhysicsGround'

import { canvasDefaultValues } from '@/data/projects/three/canvasData'
import Camera from './Camera'
import Player from '../../controls/player/Player'

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
        <Player>
          <Camera />
        </Player>
        <Suspense fallback={null}>
          <ProjectsScene />
        </Suspense>
        <PhysicsGround />
      </Physics>
    </Canvas>
  )
}
