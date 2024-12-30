import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import Camera from './Camera'
import Lights from './lights/Lights'
import GreetingGroup from './greeting/GreetingGroup'
import PortraitGroup from './portrait/PortraitGroup'
import AlsoKnowAsGroup from './also_know_as/AlsoKnowAsGroup'
import MocoGroup from './moco/MocoGroup'
import DeveloperGroup from './developer/DeveloperGroup'
import PostProcessing from './PostProcessing'

import { canvasDefaultValues } from '@/data/home/hero/three/canvasData'

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
        <MocoGroup />
        {/* <DeveloperGroup /> */}
      </Suspense>
      <PostProcessing />
    </Canvas>
  )
}
