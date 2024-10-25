import React from 'react'
import { Canvas } from '@react-three/fiber'

import Camera from './Camera'
import Lights from './Lights'
import HomeScene from './HomeScene'

import { default as heroConstants } from '@/constants/canvas/heroConstants.json'

export default function HeroCanvas() {
  return (
    <section className='fullscreen'>
      <Canvas
        dpr={heroConstants.CANVAS.DPR}
        legacy={heroConstants.CANVAS.LEGACY}
        shadows
        gl={{
          antialias: heroConstants.CANVAS.GL.ANTIALIAS,
          alpha: heroConstants.CANVAS.GL.ALPHA,
          powerPreference: heroConstants.CANVAS.GL.POWER_PREFERENCE,
        }}
      >
        <Camera />
        <Lights />
        <HomeScene />
      </Canvas>
    </section>
  )
}
