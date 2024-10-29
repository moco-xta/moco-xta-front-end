import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { useLenis } from 'lenis/react'
import studio from '@theatre/studio'
import extension from '@theatre/r3f/dist/extension'
import { SheetProvider } from '@theatre/r3f'
import { getProject, val } from '@theatre/core'

import Camera from './Camera'
import Lights from './Lights'
import HomeScene from './HomeScene'

import { default as heroConstants } from '@/constants/canvas/heroConstants.json'

studio.extend(extension)
studio.initialize()

export default function HeroCanvas() {
  const sheet = getProject('home_project').sheet('hero_sheet')

  useLenis(({ dimensions, scroll }) => {
    const sequenceLength = val(sheet!.sequence.pointer.length)
    sheet!.sequence.position = (scroll / dimensions.scrollHeight) * sequenceLength
  })

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
          <SheetProvider sheet={sheet}>
            <Camera />
            <Lights />
            <HomeScene />
          </SheetProvider>
        </Suspense>
      </Canvas>
    </section>
  )
}
