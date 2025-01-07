import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'

import { LogoMoco } from '../../models/logos'

import { default as logoConstants } from '@/constants/three/logoConstants.json'

export default function LogoCanvas() {
  return (
    <Canvas
      dpr={logoConstants.CANVAS.DPR}
      shadows
      legacy={logoConstants.CANVAS.LEGACY}
      linear
      flat
      gl={{
        antialias: logoConstants.CANVAS.GL.ANTIALIAS,
        alpha: logoConstants.CANVAS.GL.ALPHA,
        powerPreference: logoConstants.CANVAS.GL.POWER_PREFERENCE,
      }}
    >
      <PerspectiveCamera
        makeDefault
        position={[
          logoConstants.PERSPECTIVE_CAMERA.POSITION.X,
          logoConstants.PERSPECTIVE_CAMERA.POSITION.Y,
          logoConstants.PERSPECTIVE_CAMERA.POSITION.Z,
        ]}
        fov={logoConstants.PERSPECTIVE_CAMERA.FOV}
      />
      <ambientLight intensity={logoConstants.LIGHTS.AMBIENT_LIGHT.INTENSITY} />
      <Suspense>
        <LogoMoco />
      </Suspense>
    </Canvas>
  )
}
