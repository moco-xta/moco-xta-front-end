import React, { Suspense } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
// import { OrbitControls } from '@react-three/drei'
import { Physics } from '@react-three/rapier'

import Camera from './Camera'
import Lightning from './lightning/Lightning'
import Wrapper from './moco_helium/Wrapper'
import MocoHelium from './moco_helium/MocoHelium'
// import GreetingGroup from './greeting/GreetingGroup'
import PostProcessing from './PostProcessing'

import { canvasDefaultValues } from '@/data/hero/three/canvasData'

import { mocoHeliumData } from '@/data/hero/three/moco_helium/mocoHeliumData'

import './index.scss'

export default function HeroCanvas() {
  return (
    <Canvas
      {...canvasDefaultValues}
    >
      <Camera />
      <Lightning />
      {/* <OrbitControls /> */}
      <Suspense fallback={null}>
        <Physics
          // debug
          gravity={[
            mocoHeliumData.physics.gravity.x,
            mocoHeliumData.physics.gravity.y,
            mocoHeliumData.physics.gravity.z,
          ]}
        >
          <group
            position={
              new THREE.Vector3(
                mocoHeliumData.balloons.position.group.x,
                mocoHeliumData.balloons.position.group.y,
                mocoHeliumData.balloons.position.group.z,
              )
            }
          >
            <MocoHelium />
            <Wrapper />
          </group>
        </Physics>
        {/* <GreetingGroup /> */}
      </Suspense>
      <PostProcessing />
    </Canvas>
  )
}
