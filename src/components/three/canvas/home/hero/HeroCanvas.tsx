import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import Camera from './Camera'
import Lights from './lights/Lights'
import GreetingGroup from './greeting/GreetingGroup'
import PortraitGroup from './portrait/PortraitGroup'

import { canvasDefaultValues } from '@/data/home/hero/three/canvasData'
import AlsoKnowAsGroup from './also_know_as/AlsoKnowAsGroup'

export default function HeroCanvas() {
  return (
    <Canvas {...canvasDefaultValues}>
      <Camera />
      <Lights />
      <OrbitControls />
      <Suspense fallback={null}>
        <GreetingGroup />
        <PortraitGroup />
        <AlsoKnowAsGroup />
      </Suspense>
    </Canvas>
  )
}
