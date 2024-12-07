import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import Camera from './Camera'
import Lights from './lights/Lights'
import HiImFedericoGroup from './hi_i_m_federico_group/HiImFedericoGroup'
import FedericoPortraitGroup from './federico_portrait/FedericoPortraitGroup'

import { default as heroCanvasConstants } from '@/constants/canvas/home/heroCanvasConstants.json'
import AlsoKnowAsGroup from './gretting_canvas/also_know_as_group/AlsoKnowAsGroup'

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
        <HiImFedericoGroup timeline={timeline} />
        <FedericoPortraitGroup timeline={timeline} />
        <AlsoKnowAsGroup timeline={timeline} />
      </Suspense>
    </Canvas>
  )
}
