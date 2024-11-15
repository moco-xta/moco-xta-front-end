import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'

import SkillScene from './SkillsScene'

import { default as skillsConstants } from '@/constants/canvas/skillsConstants.json'

export default function SkillsCanvas() {
  return (
    <Canvas
      id='skills_canvas'
      dpr={skillsConstants.CANVAS.DPR}
      shadows
      legacy={skillsConstants.CANVAS.LEGACY}
      linear
      flat
      gl={{
        antialias: skillsConstants.CANVAS.GL.ANTIALIAS,
        alpha: skillsConstants.CANVAS.GL.ALPHA,
        powerPreference: skillsConstants.CANVAS.GL.POWER_PREFERENCE,
      }}
      style={{
        width: '100vw',
        height: '100vh',
      }}
    >
      <PerspectiveCamera
        makeDefault
        position={[
          skillsConstants.PERSPECTIVE_CAMERA.POSITION.X,
          skillsConstants.PERSPECTIVE_CAMERA.POSITION.Y,
          skillsConstants.PERSPECTIVE_CAMERA.POSITION.Z,
        ]}
        fov={skillsConstants.PERSPECTIVE_CAMERA.FOV}
      />
      <ambientLight intensity={skillsConstants.LIGHTS.AMBIENT_LIGHT.INTENSITY} />
      <Suspense>
        <SkillScene />
      </Suspense>
    </Canvas>
  )
}
