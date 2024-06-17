import React, { Suspense } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'

import { SocialsCanvasInterface } from '@/interfaces/new/threeInterfaces'

import Lights from './Lights'
import SocialsScene from './SocialsScene'

import { default as socialsConstants } from '@/constants/new/canvas/socialsConstants.json'

import './index.scss'

export default function SocialsCanvas({ className }: SocialsCanvasInterface) {
  return (
    <Canvas
      className={`${className}`}
      /* style={{ zIndex: '3', position: 'absolute', width: '300px',  }} */
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
      <PerspectiveCamera
        makeDefault
        position={[0, 0, 5]}
        fov={55}
        near={0.1}
        far={1000}
      />
      {/* <OrbitControls /> */}
      <Lights />
      <Suspense>
        <SocialsScene />
      </Suspense>
    </Canvas>
  )
}
