'use client'

import React, { Suspense, useRef } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'

import { IntroductionCardCanvasInterface } from '@/interfaces/introductionCardInterfaces'

import Lights from './lights'
import BloomEffect from './bloom_effect'
import Scene from './scene'

import { default as introductionConstants } from '@/constants/introductionConstants.json'

/* const descriptionFont = '/fonts/json/Monserrat_Bold.json' */

import './index.scss'

export default function IntroductionCardCanvas({
  content,
}: IntroductionCardCanvasInterface) {
  return (
    <Canvas
      dpr={introductionConstants.SCENE.CANVAS.DPR}
      shadows
      linear
      flat
      gl={{
        antialias: introductionConstants.SCENE.CANVAS.ANTIALIAS,
        powerPreference: introductionConstants.SCENE.CANVAS.POWER_PREFERENCE,
        preserveDrawingBuffer:
          introductionConstants.SCENE.CANVAS.PRESERVE_DRAWING_BUFFER,
      }}
    >
      <PerspectiveCamera
        makeDefault
        position={[
          introductionConstants.SCENE.PERSPECTIVE_CAMERA.POSITION.X,
          introductionConstants.SCENE.PERSPECTIVE_CAMERA.POSITION.Y,
          introductionConstants.SCENE.PERSPECTIVE_CAMERA.POSITION.Z,
        ]}
      />
      <Lights />
      <BloomEffect />
      <Suspense fallback={null}>
        <Scene content={content} />
      </Suspense>
    </Canvas>
  )
}
