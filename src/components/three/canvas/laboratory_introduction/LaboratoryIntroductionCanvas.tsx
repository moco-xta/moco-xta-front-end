import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'

import Lights from './Lights'
import LaboratoryIntroductionScene from './LaboratoryIntroductionScene'
import PostProcessing from './PostProcessing'

import { canvasDefaultValues } from '@/data/laboratory_introduction/three/canvasData'
import { cameraDefaultValues } from '@/data/laboratory_introduction/three/cameraData'

export default function LaboratoryIntroductionCanvas() {
  return (
    <Canvas {...canvasDefaultValues}>
      <PerspectiveCamera {...cameraDefaultValues.camera} />
      <OrbitControls target={[0, 10, 0]} />
      <Lights />
      <Suspense fallback={null}>
        <LaboratoryIntroductionScene />
      </Suspense>
      <PostProcessing />
    </Canvas>
  )
}
