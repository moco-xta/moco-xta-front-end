import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
// import { Shadow } from '@react-three/drei'
import { Physics } from '@react-three/rapier'
import { isMobile } from 'react-device-detect'

import { Camera } from './Camera'
import Lights from './Lights'
import Fog from './Fog'
import MocoHelium from './MocoHelium'
import Wrapper from './Wrapper'
import PostProcessing from './PostProcessing'

import { canvasDefaultValues } from '@/data/canvas/hero/canvasData'
import { mocoHeliumData } from '@/data/canvas/hero/mocoHeliumData'

export default function HeroCanvas() {
  const [terminalType] = useState<'isDesktop' | 'isMobile'>(!isMobile ? 'isDesktop' : 'isMobile')

  return (
    <Canvas {...canvasDefaultValues}>
      <Camera terminalType={terminalType} />
      <Lights />
      {/* <Shadow
        rotation={[-Math.PI / 2, 0, 0]}
        scale={10}
        opacity={0.4}
        color='black'
      /> */}
      <Fog />
      <Suspense fallback={null}>
        <Physics
          // debug
          gravity={[
            mocoHeliumData.physics.gravity.x,
            mocoHeliumData.physics.gravity.y,
            mocoHeliumData.physics.gravity.z,
          ]}
        >
          <MocoHelium terminalType={terminalType} />
          <Wrapper terminalType={terminalType} />
        </Physics>
      </Suspense>
      <PostProcessing terminalType={terminalType} />
    </Canvas>
  )
}
