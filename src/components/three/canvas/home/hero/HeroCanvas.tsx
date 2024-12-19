import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import Camera from './Camera'
import Lights from './lights/Lights'
import GreetingGroup from './greeting/GreetingGroup'

import { canvasData } from '@/data/home/hero/three/canvasData'

export default function HeroCanvas() {
  return (
    <Canvas {...canvasData}>
      <Camera />
      <Lights />
      <OrbitControls />
      <Suspense fallback={null}>
        <GreetingGroup />
      </Suspense>
    </Canvas>
  )
}
