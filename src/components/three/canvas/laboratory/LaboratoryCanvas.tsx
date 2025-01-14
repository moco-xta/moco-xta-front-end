import React, { Suspense } from 'react'
// import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'

import Lightning from './lightning/Lightning'
import Player from '../../controls/player/Player'
import LaboratoryScene from './LaboratoryScene'
import PhysicsGround from '../../physics/PhysicsGround'

import { canvasDefaultValues } from '@/data/about/three/canvasData'
import { cameraDefaultValues } from '@/data/about/three/cameraData'
import { physicsGroundDefaultValues } from '@/data/about/three/physicsGroundData'

export default function ProjectsCanvas() {
  return (
    <Canvas
      {...canvasDefaultValues}
      /* onCreated={({ scene }) => {
        scene.fog = new THREE.Fog(0x334257, 9, 50)
      }} */
    >
      <Lightning />
      <Physics debug>
        <Player cameraDefaultValues={cameraDefaultValues.camera} />
        <Suspense fallback={null}>
          <LaboratoryScene />
        </Suspense>
        <PhysicsGround
          args={[physicsGroundDefaultValues.width, physicsGroundDefaultValues.depth]}
        />
      </Physics>
    </Canvas>
  )
}
