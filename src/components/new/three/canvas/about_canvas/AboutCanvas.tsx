import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'

import AboutControls from './controls/AboutControls'
import LaboratoireScene from './laboratoire/LaboratoireScene'
import MinecraftScene from './minecraft/MinecraftScene'
import PhysicsGround from './PhysicsGround'
/* import RealTimeSky from './RealTimeSky' */
/* import ToneMapping from './ToneMapping' */

import { default as aboutConstants } from '@/constants/new/canvas/about/aboutConstants.json'

export default function AboutCanvas() {
  return (
    <Canvas
      style={{
        zIndex: 0,
        position: 'absolute',
      }}
      dpr={aboutConstants.CANVAS.DPR}
      legacy={aboutConstants.CANVAS.LEGACY}
      shadows
      gl={{
        antialias: aboutConstants.CANVAS.GL.ANTIALIAS,
        alpha: aboutConstants.CANVAS.GL.ALPHA,
        powerPreference: aboutConstants.CANVAS.GL.POWER_PREFERENCE,
      }}
    >
      <Suspense fallback={null}>
        <Physics debug>
          <AboutControls />
          <LaboratoireScene />
          <MinecraftScene />
          <PhysicsGround />
          {/* <ToneMapping /> */}
          {/* {isFinalRender && <RealTimeSky />} */}
          {/* <Debug
            color={'red'}
            scale={1.1}
          /> */}
        </Physics>
      </Suspense>
    </Canvas>
  )
}
