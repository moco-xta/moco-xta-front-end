import React, { Suspense } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'

import Lights from './Lights'
import SocialsScene from './SocialsScene'

import { default as socialsConstants } from '@/constants/new/canvas/socialsConstants.json'

export default function SocialsCanvas() {
  return (
    <Canvas
      dpr={socialsConstants.CANVAS.DPR}
      shadows={{ type: THREE.PCFSoftShadowMap }}
      legacy={socialsConstants.CANVAS.LEGACY}
      linear
      flat
      gl={{
        antialias: socialsConstants.CANVAS.GL.ANTIALIAS,
        alpha: socialsConstants.CANVAS.GL.ALPHA,
        powerPreference: socialsConstants.CANVAS.GL.POWER_PREFERENCE,
      }}
    >
      <Lights />
      <Suspense>
        <SocialsScene />
      </Suspense>
    </Canvas>
  )
}
