import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'

import { default as contactConstants } from '@/constants/new/canvas/contactConstants.json'
import ContactScene from './ContactScene'

export default function ContactCanvas() {
  return (
    <Canvas
      dpr={contactConstants.CANVAS.DPR}
      shadows
      legacy={contactConstants.CANVAS.LEGACY}
      linear
      flat
      gl={{
        antialias: contactConstants.CANVAS.GL.ANTIALIAS,
        alpha: contactConstants.CANVAS.GL.ALPHA,
        powerPreference: contactConstants.CANVAS.GL.POWER_PREFERENCE,
      }}
    >
      <PerspectiveCamera
        makeDefault
        position={
            [
                contactConstants.PERSPECTIVE_CAMERA.POSITION.X,
                contactConstants.PERSPECTIVE_CAMERA.POSITION.Y,
                contactConstants.PERSPECTIVE_CAMERA.POSITION.Z,
              ]
        }
        fov={contactConstants.PERSPECTIVE_CAMERA.FOV}
      />
      <OrbitControls />
      <ambientLight intensity={contactConstants.LIGHTS.AMBIENT_LIGHT.INTENSITY} />
      <Suspense>
        <ContactScene />
      </Suspense>
    </Canvas>
  )
}
