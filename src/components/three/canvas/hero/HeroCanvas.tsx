import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import Camera from './Camera'
import Lightning from './lightning/Lightning'
import GreetingGroup from './greeting/GreetingGroup'
// import PortraitGroup from './portrait/PortraitGroup'
// import AlsoKnowAsGroup from './also_know_as/AlsoKnowAsGroup'
// import MocoGroup from './moco/MocoGroup'
import PostProcessing from './PostProcessing'

import { canvasDefaultValues } from '@/data/hero/three/canvasData'

import './index.scss'

export default function HeroCanvas() {
  return (
    <Canvas {...canvasDefaultValues}>
      <Camera />
      <Lightning />
      <OrbitControls />
      <Suspense fallback={null}>
        <GreetingGroup />
        {/* <PortraitGroup /> */}
        {/* <AlsoKnowAsGroup /> */}
        {/* <MocoGroup /> */}
      </Suspense>
      <PostProcessing />
    </Canvas>
  )
}
