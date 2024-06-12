import React, { Suspense } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import {
  DeviceOrientationControls,
  Environment,
  PerspectiveCamera,
  PointerLockControls,
} from '@react-three/drei'
import { Physics } from '@react-three/rapier'
import { isMobile } from 'react-device-detect'

import Player from '../../controls/Player'
import AboutScene from './AboutScene'

import { default as aboutConstants } from '@/constants/new/canvas/aboutConstants.json'
import { default as imgConstants } from '@/constants/new/assets/imgConstants.json'

export default function AboutCanvas() {
  return (
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
        fov={aboutConstants.PERSPECTIVE_CAMERA.FOV}
        position={[
          aboutConstants.PERSPECTIVE_CAMERA.POSITION.X,
          aboutConstants.PERSPECTIVE_CAMERA.POSITION.Y,
          aboutConstants.PERSPECTIVE_CAMERA.POSITION.Z,
        ]}
      />
      <ambientLight intensity={1.8} />
      {/* <rectAreaLight args={[10, 10]} position={[0, 20, 0]} /> */}
      <Suspense fallback={null}>
        <Physics debug>
          {!isMobile ? (
            <>
              <Player
                rigidBodyPosition={
                  new THREE.Vector3(
                    aboutConstants.PERSPECTIVE_CAMERA.POSITION.X,
                    aboutConstants.PERSPECTIVE_CAMERA.POSITION.Y + 2,
                    aboutConstants.PERSPECTIVE_CAMERA.POSITION.Z,
                  )
                }
                cuboidColliderArgs={[
                  0.5,
                  aboutConstants.PERSPECTIVE_CAMERA.POSITION.Y,
                  0.5,
                ]}
              />
              <PointerLockControls />
            </>
          ) : (
            <DeviceOrientationControls />
          )}
          <AboutScene />
          {/* <Environment files={imgConstants.HDRS.LABORATOIRE_ENVIRONMENT} /> */}
        </Physics>
      </Suspense>
    </Canvas>
  )
}
