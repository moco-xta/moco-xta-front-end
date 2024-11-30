import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Box } from '@react-three/drei'

import { default as heroAnimationsConstants } from '@/constants/animations/home/heroAnimationsConstants.json'

export default function GreetingCanvas() {
  return (
    <section
      id='greeting_canvas'
      className='fullscreen'
      style={{ zIndex: 1, position: 'fixed' }}
    >
      <Canvas
        dpr={heroAnimationsConstants.CANVAS.DPR}
        legacy={heroAnimationsConstants.CANVAS.LEGACY}
        shadows
        gl={{
          antialias: heroAnimationsConstants.CANVAS.GL.ANTIALIAS,
          alpha: heroAnimationsConstants.CANVAS.GL.ALPHA,
          powerPreference: heroAnimationsConstants.CANVAS.GL.POWER_PREFERENCE,
        }}
      >
        <Suspense fallback={null}>
          <Box />
        </Suspense>
      </Canvas>
    </section>
  )
}
