import React, { Suspense } from 'react'
import { useSelector } from 'react-redux'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'

import { RootState } from '@/redux/store'

import Lights from './Lights'
import Player from '../../controls/player/Player'
import LaboratoryScene from './LaboratoryScene'
import PhysicsGround from '../../lib/physics/PhysicsGround'

import { canvasDefaultValues } from '@/data/laboratory/three/canvasData'
import { cameraDefaultValues } from '@/data/laboratory/three/cameraData'
import { physicsGroundDefaultValues } from '@/data/laboratory/three/physicsGroundData'

export default function LaboratoryCanvas() {
  const { debug } = useSelector((state: RootState) => state.playerPageState)

  return (
    <Canvas
      {...canvasDefaultValues}
      /* onCreated={({ scene }) => {
        scene.fog = new THREE.Fog(0x334257, 9, 50)
      }} */
      // onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}
    >
      <Lights />
      <Suspense fallback={null}>
        <Physics
          debug={debug}
          gravity={[0, -9.81, 0]}
        >
          <Player
            rigidBodyDefaultValues={cameraDefaultValues.rigidBody!}
            cameraDefaultValues={cameraDefaultValues.camera}
          />
          <LaboratoryScene />
          <PhysicsGround
            args={[physicsGroundDefaultValues.width, physicsGroundDefaultValues.depth]}
            position={new THREE.Vector3(0, 0.02, 0)}
          />
        </Physics>
      </Suspense>
    </Canvas>
  )
}
