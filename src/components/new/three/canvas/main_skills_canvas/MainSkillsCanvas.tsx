import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'

import MainSkillsScene from './MainSkillsScene'

import { default as heroConstants } from '@/constants/new/canvas/mainSkillsConstants.json'

export default function MainSkillsCanvas() {
  const perspectiveCameraRef = useRef<THREE.PerspectiveCamera>(null!)

  return (
    <Canvas
      id='main_skills_canvas'
      dpr={heroConstants.CANVAS.DPR}
      shadows
      legacy={heroConstants.CANVAS.LEGACY}
      linear
      flat
      gl={{
        antialias: heroConstants.CANVAS.GL.ANTIALIAS,
        alpha: heroConstants.CANVAS.GL.ALPHA,
        powerPreference: heroConstants.CANVAS.GL.POWER_PREFERENCE,
      }}
    >
      <PerspectiveCamera
        ref={perspectiveCameraRef}
        makeDefault
        position={[
          heroConstants.PERSPECTIVE_CAMERA.POSITION.X,
          heroConstants.PERSPECTIVE_CAMERA.POSITION.Y,
          heroConstants.PERSPECTIVE_CAMERA.POSITION.Z,
        ]}
        fov={heroConstants.PERSPECTIVE_CAMERA.FOV}
      />
      <ambientLight intensity={heroConstants.LIGHTS.AMBIENT_LIGHT.INTENSITY} />
      <pointLight
        position={[1.2, 1, 1]}
        intensity={5}
        castShadow
      />{' '}
      // TODO: Remove hardcoded value
      <pointLight
        position={[-1.2, 1, 1]}
        intensity={5}
        castShadow
      />{' '}
      // TODO: Remove hardcoded value
      <pointLight
        position={[0, -1, 2]}
        intensity={5}
        castShadow
      />{' '}
      // TODO: Remove hardcoded value
      <Suspense>
        <MainSkillsScene />
      </Suspense>
    </Canvas>
  )
}
