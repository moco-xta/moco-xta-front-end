import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  DeviceOrientationControls,
  PerspectiveCamera,
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
            <>
              <PerspectiveCamera
                makeDefault
                aspect={1200 / 600}
                fov={55}
                position={[0, 13, 0]}
                rotation={[0, 0, 0]}
              />
              <DeviceOrientationControls />
            </>
          )}
          <AboutScene />
        </Physics>
      </Suspense>
    </Canvas>
  )
}
