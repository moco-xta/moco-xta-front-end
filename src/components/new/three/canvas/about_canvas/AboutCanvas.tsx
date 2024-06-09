import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  DeviceOrientationControls,
  PointerLockControls,
} from '@react-three/drei'
import { Physics } from '@react-three/rapier'
import { isMobile } from 'react-device-detect'

import AboutScene from './AboutScene'

import { default as aboutConstants } from '@/constants/new/canvas/aboutConstants.json'
import Player from '../../controls/Player'

export default function AboutCanvas() {
  return (
    <Canvas
      dpr={aboutConstants.CANVAS.DPR}
      shadows
      gl={{
        antialias: aboutConstants.CANVAS.GL.ANTIALIAS,
        alpha: aboutConstants.CANVAS.GL.ALPHA,
        powerPreference: aboutConstants.CANVAS.GL.POWER_PREFERENCE,
      }}
    >
      <ambientLight intensity={1} />
      <Suspense fallback={null}>
        <Physics debug>
          {!isMobile ? (
            <>
              <Player />
              <PointerLockControls />
            </>
          ) : (
            <DeviceOrientationControls />
          )}
          <AboutScene />
        </Physics>
      </Suspense>
    </Canvas>
  )
}
