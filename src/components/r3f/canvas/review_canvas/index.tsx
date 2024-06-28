import React, { Suspense } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'

import { ReviewCanvasInterface } from '@/interfaces/r3fInterfaces'

import Lights from '../../lights'
import ReviewCard from './review_card'
import ToneMapping from './tone_mapping'
import PostProcessing from './post_processing'

import { default as reviewConstants } from '@/constants/canvas/reviewConstants.json'
import { default as imgConstants } from '@/constants/imgConstants.json'

import './index.scss'

export default function ReviewCanvas({ reviewIndex, data }: ReviewCanvasInterface) {
  return (
    <Canvas
      dpr={reviewConstants.CANVAS.DPR}
      shadows
      legacy={reviewConstants.CANVAS.LEGACY}
      linear
      flat
      gl={{
        antialias: reviewConstants.CANVAS.GL.ANTIALIAS,
        alpha: reviewConstants.CANVAS.GL.ALPHA,
        powerPreference: reviewConstants.CANVAS.GL.POWER_PREFERENCE,
      }}
    >
      <PerspectiveCamera
        makeDefault
        position={[
          reviewConstants.PERSPECTIVE_CAMERA.POSITION.X,
          reviewConstants.PERSPECTIVE_CAMERA.POSITION.Y,
          reviewConstants.PERSPECTIVE_CAMERA.POSITION.Z,
        ]}
        fov={reviewConstants.PERSPECTIVE_CAMERA.FOV}
        near={reviewConstants.PERSPECTIVE_CAMERA.NEAR}
        far={reviewConstants.PERSPECTIVE_CAMERA.FAR}
      />
      <Lights
        canvasName={`review_${reviewIndex}`}
        data={reviewConstants.LIGHTS}
      />
      <ambientLight />
      <Suspense>
        <Environment
          files={imgConstants.HDRS.REVIEW_CARD_ENVIRONMENT}
          encoding={THREE.LinearEncoding}
        />
        <ReviewCard data={data} />
        <ToneMapping />
        <PostProcessing />
      </Suspense>
    </Canvas>
  )
}
