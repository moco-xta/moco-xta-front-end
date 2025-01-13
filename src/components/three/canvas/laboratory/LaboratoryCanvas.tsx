import React, { Suspense } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'

import Lightning from './lightning/Lightning'
import Player from '../../controls/player/Player'
import LaboratoryScene from './LaboratoryScene'
import PhysicsGround from '../../physics/PhysicsGround'

import { canvasDefaultValues } from '@/data/laboratory/three/canvasData'
import { cameraData } from '@/data/laboratory/three/cameraData'

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
        <Player cameraDefaultValues={cameraData.defaultValues.perspectiveCamera} />
        <Suspense fallback={null}>
          <LaboratoryScene />
        </Suspense>
        <PhysicsGround args={[50, 50]} />
      </Physics>
    </Canvas>
  )
}
