import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Physics } from '@react-three/rapier'

import Camera from './Camera'
import Lights from './lights/Lights'
import HiImFedericoGroup from './hi_i_m_federico_group/HiImFedericoGroup'
import FedericoPortraitGroup from './federico_portrait_group/FedericoPortraitGroup'
import AlsoKnowAsGroup from './also_know_as_group/AlsoKnowAsGroup'
import MocoHeliumBalloons from './moco_helium_balloons/MocoHeliumBalloons'
import AFrontEndDeveloperGroup from './a_front_end_developer_group/AFrontEndDeveloperGroup'

import { default as heroCanvasConstants } from '@/constants/canvas/home/hero/heroCanvasConstants.json'

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
          <HiImFedericoGroup timeline={timeline} />
          <FedericoPortraitGroup timeline={timeline} />
          <AlsoKnowAsGroup timeline={timeline} />
          <MocoHeliumBalloons timeline={timeline} />
          <AFrontEndDeveloperGroup timeline={timeline} />
        </Physics>
      </Suspense>
    </Canvas>
  )
}
