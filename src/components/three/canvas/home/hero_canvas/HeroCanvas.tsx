import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Physics } from '@react-three/rapier'

import Camera from './Camera'
import Lights from './lights/Lights'
import GreetingGroup from './groups/greeting/GreetingGroup'
import PortraitGroup from './groups/portrait/PortraitGroup'
import AlsoKnowAsGroup from './groups/also_know_as/AlsoKnowAsGroup'
import MocoGroup from './groups/moco/MocoHeliumBalloons'
import DeveloperGroup from './groups/developer/DeveloperGroup'

import { default as heroCanvasConstants } from '@/constants/three/home/hero/heroCanvasConstants.json'

interface HeroCanvasInterface {
  timeline: GSAPTimeline
}

export default function HeroCanvas({ timeline }: HeroCanvasInterface) {
  return (
    <Canvas
      dpr={heroCanvasConstants.CANVAS.DPR}
      legacy={heroCanvasConstants.CANVAS.LEGACY}
      shadows
      /* onCreated={({ gl }) => {
        gl.setClearColor(0xfffff, 0)
        gl.autoClear = true
        gl.clearDepth()
      }} */
      gl={{
        antialias: heroCanvasConstants.CANVAS.GL.ANTIALIAS,
        alpha: heroCanvasConstants.CANVAS.GL.ALPHA,
        powerPreference: heroCanvasConstants.CANVAS.GL.POWER_PREFERENCE,
      }}
    >
      <Camera />
      <OrbitControls />
      <Lights timeline={timeline} />
      {/* <color
        attach='background'
        args={['#ffffff']}
      /> */}
      <Suspense fallback={null}>
        <Physics
          debug={heroCanvasConstants.PHYSICS.DEBUG}
          gravity={[
            heroCanvasConstants.PHYSICS.GRAVITY.X,
            heroCanvasConstants.PHYSICS.GRAVITY.Y,
            heroCanvasConstants.PHYSICS.GRAVITY.Z,
          ]}
          // timeStep={heroCanvasConstants.PHYSICS.TIME_STEP}
          paused={heroCanvasConstants.PHYSICS.PAUSED}
        >
          <GreetingGroup timeline={timeline} />
          <PortraitGroup timeline={timeline} />
          <AlsoKnowAsGroup timeline={timeline} />
          <MocoGroup timeline={timeline} />
          <DeveloperGroup timeline={timeline} />
        </Physics>
      </Suspense>
    </Canvas>
  )
}
