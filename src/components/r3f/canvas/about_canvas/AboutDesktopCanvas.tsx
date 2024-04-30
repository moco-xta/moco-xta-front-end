import React, { Suspense, useMemo } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import {
  KeyboardControls,
  PerspectiveCamera,
  PointerLockControls,
} from '@react-three/drei'
import { Physics } from '@react-three/rapier'

import Player from '../../controls/Player'
import AboutScene from './AboutScene'

import { default as controlsConstants } from '@/constants/controlsConstants.json'
import { default as aboutConstants } from '@/constants/canvas/aboutConstants.json'
import Lights from './Lights'

export default function AboutDesktopCanvas() {
  const keyboardControlsMap = useMemo(
    () => [
      { name: controlsConstants.FORWARD, keys: controlsConstants.FORWARD_KEYS },
      {
        name: controlsConstants.BACKWARD,
        keys: controlsConstants.BACKWARD_KEYS,
      },
      { name: controlsConstants.LEFT, keys: controlsConstants.LEFT_KEYS },
      { name: controlsConstants.RIGHT, keys: controlsConstants.RIGHT_KEYS },
      { name: controlsConstants.JUMP, keys: controlsConstants.JUMP_KEY },
    ],
    [],
  )

  return (
    <KeyboardControls map={keyboardControlsMap}>
      <Canvas
        dpr={aboutConstants.CANVAS.DPR}
        shadows
        gl={{
          antialias: aboutConstants.CANVAS.GL.ANTIALIAS,
          alpha: aboutConstants.CANVAS.GL.ALPHA,
          powerPreference: aboutConstants.CANVAS.GL.POWER_PREFERENCE,
        }}
      >
        <PerspectiveCamera
          makeDefault
          aspect={1200 / 600}
          fov={55}
          position={[0, 0, 0]}
          rotation={[0, THREE.MathUtils.degToRad(180), 0]}
          onUpdate={(self) => self.updateProjectionMatrix()}
        />
        <PointerLockControls />
        <Lights />
        <Suspense fallback={null}>
          <Physics debug>
            <Player />
            <AboutScene />
          </Physics>
        </Suspense>
      </Canvas>
    </KeyboardControls>
  )
}
