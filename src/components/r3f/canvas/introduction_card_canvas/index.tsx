import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'

import { IntroductionCardCanvasInterface } from '@/interfaces/r3fInterfaces'

import Lights from './lights'
import Card from './card'

import { default as introductionConstants } from '@/constants/introductionConstants.json'

import './index.scss'
import ToneMapping from './tone_mapping'
import BloomEffect from './bloom_effect'

export default function IntroductionCardCanvas({
  content,
}: IntroductionCardCanvasInterface) {
  return (
    <Canvas
      dpr={introductionConstants.CANVAS.DPR}
      shadows
      legacy={introductionConstants.CANVAS.LEGACY}
      linear
      flat
      gl={{
        antialias: introductionConstants.CANVAS.GL.ANTIALIAS,
        alpha: introductionConstants.CANVAS.GL.ALPHA,
        powerPreference: introductionConstants.CANVAS.GL.POWER_PREFERENCE,
      }}
    >
      <PerspectiveCamera
        makeDefault
        position={[
          introductionConstants.PERSPECTIVE_CAMERA.POSITION.X,
          introductionConstants.PERSPECTIVE_CAMERA.POSITION.Y,
          introductionConstants.PERSPECTIVE_CAMERA.POSITION.Z,
        ]}
        fov={introductionConstants.PERSPECTIVE_CAMERA.FOV}
      />
      <Lights />
      <Suspense fallback={null}>
        <Card content={content} />
        <ToneMapping />
        <BloomEffect />
      </Suspense>
    </Canvas>
  )
}
