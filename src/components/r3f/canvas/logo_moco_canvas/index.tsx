import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'

import LogoMocoScene from './logo_moco_scene'
import PostProcessing from './post_processing'

import { default as logoMocoConstants } from '@/constants/canvas/logoMocoConstants.json'

export default function LogoMocoCanvas() {
  return (
    <Canvas
      dpr={logoMocoConstants.CANVAS.DPR}
      shadows
      legacy={logoMocoConstants.CANVAS.LEGACY}
      linear
      flat
      gl={{
        antialias: logoMocoConstants.CANVAS.GL.ANTIALIAS,
        alpha: logoMocoConstants.CANVAS.GL.ALPHA,
        powerPreference: logoMocoConstants.CANVAS.GL.POWER_PREFERENCE,
      }}
    >
      <PerspectiveCamera
        makeDefault
        position={[
          logoMocoConstants.PERSPECTIVE_CAMERA.POSITION.X,
          logoMocoConstants.PERSPECTIVE_CAMERA.POSITION.Y,
          logoMocoConstants.PERSPECTIVE_CAMERA.POSITION.Z,
        ]}
        fov={logoMocoConstants.PERSPECTIVE_CAMERA.FOV}
      />
      <ambientLight intensity={2} />
      <Suspense>
        <LogoMocoScene />
        {/* <PostProcessing /> */}
      </Suspense>
    </Canvas>
  )
}
