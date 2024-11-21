import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { useLenis } from 'lenis/react'

import Camera from './Camera'
import Control from './Control'
import Lights from './Lights'
import HomeScene from './HomeScene'
import PostProcessing from './PostProcessing'

import { default as heroConstants } from '@/constants/canvas/heroConstants.json'

export default function HeroCanvas() {
  useLenis((lenis) => {
    console.log('lenis: ', lenis)
  })

  return (
    <section
      className='fullscreen'
      style={{ zIndex: 1, position: 'fixed' }}
    >
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
        <Suspense fallback={null}>
          <Camera />
          {/* <Control /> */}
          <Lights />
          <HomeScene />
          {/* <PostProcessing /> */}
        </Suspense>
      </Canvas>
    </section>
  )
}
