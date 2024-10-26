import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Scroll, ScrollControls } from '@react-three/drei'
import studio from '@theatre/studio'
import extension from '@theatre/r3f/dist/extension'
import { SheetProvider } from '@theatre/r3f'
import { getProject } from '@theatre/core'

import Camera from './Camera'
import Lights from './Lights'
import HomeScene from './HomeScene'
import Overlay from './Overlay'

import { default as heroConstants } from '@/constants/canvas/heroConstants.json'

studio.extend(extension)
studio.initialize()

export default function HeroCanvas() {
  const sheet = getProject('Project TEST').sheet('Scene TEST')

  return (
    <section
      className='fullscreen'
      style={{ position: 'fixed' }}
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
          <ScrollControls pages={5}>
            <Scroll>
              <SheetProvider sheet={sheet}>
                <Camera />
                <Lights />
                <HomeScene />
              </SheetProvider>
            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
    </section>
  )
}
