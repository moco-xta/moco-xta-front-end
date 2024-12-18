import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { Physics } from '@react-three/rapier'

import Camera from './Camera'
import Lights from './lights/Lights'
import GreetingGroup from './groups/greeting/GreetingGroup'
import PortraitGroup from './groups/portrait/PortraitGroup'
import AlsoKnowAsGroup from './groups/also_know_as/AlsoKnowAsGroup'
import MocoGroup from './groups/moco/MocoGroup'
import DeveloperGroup from './groups/developer/DeveloperGroup'
import WithExtraSkillsGroup from './groups/extra_skills/ExtraSkillsGroup'
import PostProcessing from './PostProcessing'

import { default as physicsConstants } from '@/constants/animations/home/hero/canvas/physicsConstants.json'
import { default as imgConstants } from '@/constants/assets/imgConstants.json'

import { heroCanvasData } from '@/data/hero/three/canvas/hero/heroCanvasData'

export default function HeroCanvas() {
  return (
    <Canvas
      {...heroCanvasData}
      /* onCreated={({ gl }) => {
        gl.setClearColor(0xfffff, 0)
        gl.autoClear = true
        gl.clearDepth()
      }} */
    >
      <Camera />
      <Lights />
      <OrbitControls />
      {/* <color
        attach='background'
        args={['#ffffff']}
      /> */}
      <Suspense fallback={null}>
        <Physics
          debug={physicsConstants.DEBUG}
          gravity={[
            physicsConstants.GRAVITY.X,
            physicsConstants.GRAVITY.Y,
            physicsConstants.GRAVITY.Z,
          ]}
          // timeStep={physicsConstants.TIME_STEP}
          paused={physicsConstants.PAUSED}
        >
          <GreetingGroup />
          <PortraitGroup />
          <AlsoKnowAsGroup />
          <MocoGroup />
          <DeveloperGroup />
          {/* <WithExtraSkillsGroup /> */}
          {/* <Environment files={imgConstants.HDRS.HERO_ENVIRONMENT} /> */}
          <PostProcessing />
        </Physics>
      </Suspense>
    </Canvas>
  )
}
