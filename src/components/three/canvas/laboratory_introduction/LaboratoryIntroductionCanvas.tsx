import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'

import Lights from './Lights'
import LaboratoryIntroductionScene from './LaboratoryIntroductionScene'

import { canvasDefaultValues } from '@/data/laboratory_introduction/three/canvasData'
import { cameraDefaultValues } from '@/data/laboratory_introduction/three/cameraData'

export default function LaboratoryIntroductionCanvas() {
  return (
    <Canvas
      {...canvasDefaultValues}
    >
      <PerspectiveCamera
        {...cameraDefaultValues.camera}
      />
      <Lights />
      <Suspense fallback={null}>
        <LaboratoryIntroductionScene />
      </Suspense>
    </Canvas>
  )
}
