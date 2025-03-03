import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'

import CustomCamera from '../../lib/custom_camera/CustomCamera'
import Lights from './Lights'
import IntroductionScene from './IntroductionScene'

import { canvasDefaultValues } from '@/data/canvas/introduction/canvasData'
import { cameraDefaultValues } from '@/data/canvas/introduction/cameraData'

export default function IntroductionCanvas() {
  return (
    <Canvas {...canvasDefaultValues}>
      <CustomCamera defaultValues={cameraDefaultValues} />
      <Lights />
      <Suspense fallback={null}>
        <IntroductionScene />
      </Suspense>
    </Canvas>
  )
}
