import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'

import MainSkillsScene from './MainSkillsScene'

import { default as mainSkillsConstants } from '@/constants/canvas/mainSkillsConstants.json'

export default function MainSkillsCanvas() {
  const perspectiveCameraRef = useRef<THREE.PerspectiveCamera>(null!)

  return (
    <Canvas
      id='main_skills_canvas'
      dpr={mainSkillsConstants.CANVAS.DPR}
      shadows
      legacy={mainSkillsConstants.CANVAS.LEGACY}
      linear
      flat
      gl={{
        antialias: mainSkillsConstants.CANVAS.GL.ANTIALIAS,
        alpha: mainSkillsConstants.CANVAS.GL.ALPHA,
        powerPreference: mainSkillsConstants.CANVAS.GL.POWER_PREFERENCE,
      }}
    >
      <PerspectiveCamera
        ref={perspectiveCameraRef}
        makeDefault
        position={[
          mainSkillsConstants.PERSPECTIVE_CAMERA.POSITION.X,
          mainSkillsConstants.PERSPECTIVE_CAMERA.POSITION.Y,
          mainSkillsConstants.PERSPECTIVE_CAMERA.POSITION.Z,
        ]}
        fov={mainSkillsConstants.PERSPECTIVE_CAMERA.FOV}
      />
      <ambientLight intensity={mainSkillsConstants.LIGHTS.AMBIENT_LIGHT.INTENSITY} />
      <pointLight
        position={[1.2, 1, 1]}
        intensity={5}
        castShadow
      />{' '}
      <pointLight
        position={[-1.2, 1, 1]}
        intensity={5}
        castShadow
      />{' '}
      <pointLight
        position={[0, -1, 2]}
        intensity={5}
        castShadow
      />{' '}
      <Suspense>
        <MainSkillsScene />
      </Suspense>
    </Canvas>
  )
}
