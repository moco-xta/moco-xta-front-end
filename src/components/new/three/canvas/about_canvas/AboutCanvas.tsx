import React, { Suspense, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { DeviceOrientationControls } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import { isMobile } from 'react-device-detect'

import { AboutCanvasInterface } from '@/interfaces/new/threeInterfaces'

import { FirstPersonView } from '../../controls/FirstPersonView'
import { CannonPlayer } from '../../controls/CannonPlayer'
import AboutScene from './AboutScene'
import ToneMapping from './ToneMapping'

import { default as aboutConstants } from '@/constants/new/canvas/aboutConstants.json'

export default function AboutCanvas({
  showInstructions,
  setShowInstructions,
  isClayRender,
}: AboutCanvasInterface) {
  function pointerLockChange() {
    setShowInstructions(!showInstructions)
  }

  useEffect(() => {
    document.addEventListener('pointerlockchange', pointerLockChange, false)
    return () => {
      document.removeEventListener(
        'pointerlockchange',
        pointerLockChange,
        false,
      )
    }
  })

  return (
    <Canvas
      style={{ zIndex: 0, position: 'absolute' }}
      dpr={aboutConstants.CANVAS.DPR}
      legacy={aboutConstants.CANVAS.LEGACY}
      shadows
      gl={{
        antialias: aboutConstants.CANVAS.GL.ANTIALIAS,
        alpha: aboutConstants.CANVAS.GL.ALPHA,
        powerPreference: aboutConstants.CANVAS.GL.POWER_PREFERENCE,
      }}
    >
      {/* <PerspectiveCamera
        makeDefault
        aspect={1200 / 600}
        fov={aboutConstants.PERSPECTIVE_CAMERA.FOV}
        position={[
          aboutConstants.PERSPECTIVE_CAMERA.POSITION.X,
          aboutConstants.PERSPECTIVE_CAMERA.POSITION.Y,
          aboutConstants.PERSPECTIVE_CAMERA.POSITION.Z,
        ]}
      /> */}
      <Suspense fallback={null}>
        {/* <Physics> */}
        <Physics>
          {!isMobile ? (
            <>
              {/* <Player
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
              <PointerLockControls selector='#about_enter_button' /> */}
              <FirstPersonView />
              <CannonPlayer />
              {/* <OrbitControls target={[0, 0, 50]} /> */}
            </>
          ) : (
            <DeviceOrientationControls />
          )}
          <AboutScene isClayRender={isClayRender} />
          {/* <Environment files={imgConstants.HDRS.LABORATOIRE_ENVIRONMENT} /> */}
        </Physics>
        <ToneMapping />
      </Suspense>
    </Canvas>
  )
}
