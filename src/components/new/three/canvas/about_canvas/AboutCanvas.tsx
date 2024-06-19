import React, { Suspense, useEffect } from 'react'
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

import { AboutCanvasInterface } from '@/interfaces/new/threeInterfaces'

import { default as aboutConstants } from '@/constants/new/canvas/aboutConstants.json'

export default function AboutCanvas({
  showInstructions,
  setShowInstructions,
}: AboutCanvasInterface) {
  function pointerlockchange() {
    setShowInstructions(!showInstructions)
  }

  useEffect(() => {
    document.addEventListener('pointerlockchange', pointerlockchange, false)
    return () => {
      document.removeEventListener(
        'pointerlockchange',
        pointerlockchange,
        false,
      )
    }
  })

  return (
    <Canvas
      style={{ zIndex: 0, position: 'absolute' }}
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
      <rectAreaLight
        args={[10, 10]}
        position={[0, 20, 0]}
      />
      <Suspense fallback={null}>
        <Physics debug>
          {!isMobile ? (
            <>
              <Player
                cameraRotation={
                  new THREE.Euler(
                    THREE.MathUtils.degToRad(
                      aboutConstants.PERSPECTIVE_CAMERA.ROTATION.X,
                    ),
                    THREE.MathUtils.degToRad(
                      aboutConstants.PERSPECTIVE_CAMERA.ROTATION.Y,
                    ),
                    THREE.MathUtils.degToRad(
                      aboutConstants.PERSPECTIVE_CAMERA.ROTATION.Z,
                    ),
                  )
                }
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
              <PointerLockControls selector='#about_enter_button' />
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
