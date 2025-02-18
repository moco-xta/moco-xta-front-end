import React, { Suspense, useState } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
// import { OrbitControls } from '@react-three/drei'
import { Physics } from '@react-three/rapier'
import { isMobile } from 'react-device-detect'

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
  const [terminalType] = useState<'isDesktop' | 'isMobile'>(!isMobile ? 'isDesktop' : 'isMobile')

  return (
    <Canvas {...canvasDefaultValues}>
      <Camera terminalType={terminalType} />
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
            <MocoHelium terminalType={terminalType} />
            <Wrapper terminalType={terminalType} />
          </group>
        </Physics>
        {/* <GreetingGroup /> */}
      </Suspense>
      <PostProcessing terminalType={terminalType} />
    </Canvas>
  )
}
