import React, { Suspense } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'

import Lights from './Lights'
import SocialsScene from './SocialsScene'

import { default as socialsConstants } from '@/constants/socials_canvas/socialsConstants.json'

import './index.scss'

export type TSocialsCanvas = {
  className: string
}

export default function SocialsCanvas({ className }: TSocialsCanvas) {
  return (
    <Canvas
      className={`${className}`}
      dpr={socialsConstants.CANVAS.DPR}
      shadows={{
        type: THREE.PCFSoftShadowMap,
      }}
      legacy={socialsConstants.CANVAS.LEGACY}
      linear
      flat
      gl={{
        antialias: socialsConstants.CANVAS.GL.ANTIALIAS,
        alpha: socialsConstants.CANVAS.GL.ALPHA,
        // powerPreference: socialsConstants.CANVAS.GL.POWER_PREFERENCE,
      }}
    >
      <PerspectiveCamera
        makeDefault
        position={[0, 0, 10]}
        fov={15}
        near={0.1}
        far={1000}
      />
      <Lights />
      <Suspense>
        <SocialsScene />
      </Suspense>
    </Canvas>
  )
}
