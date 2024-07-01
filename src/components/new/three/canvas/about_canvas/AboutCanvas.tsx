import React, { Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import {
  DeviceOrientationControls,
  PerspectiveCamera,
} from '@react-three/drei'
import { Physics } from '@react-three/rapier'
import { isMobile } from 'react-device-detect'

import { AppDispatch, RootState } from '@/redux/store'
import { setShowInstructions } from '@/redux/slice/aboutSlice'

import RapierPlayer from '../../controls/players/RapierPlayer'
import PointerLockControlsComponent from '../../controls/PointerLockControls'
import LaboratoireScene from './laboratoire/LaboratoireScene'
import MinecraftScene from './minecraft/MinecraftScene'
import PhysicsGround from './PhysicsGround'
/* import RealTimeSky from './RealTimeSky' */
/* import ToneMapping from './ToneMapping' */

import { default as aboutConstants } from '@/constants/new/canvas/about/aboutConstants.json'

export default function AboutCanvas() {
  const dispatch = useDispatch<AppDispatch>()
  const { showInstructions } = useSelector((state: RootState) => state.about)

  function pointerLockChange() {
    dispatch(setShowInstructions(!showInstructions))
  }

  useEffect(() => {
    document.addEventListener('pointerlockchange', pointerLockChange, false)
    return () => {
      document.removeEventListener('pointerlockchange', pointerLockChange, false)
    }
  })

  return (
    <Canvas
      style={{
        zIndex: 0,
        position: 'absolute',
      }}
      dpr={aboutConstants.CANVAS.DPR}
      legacy={aboutConstants.CANVAS.LEGACY}
      shadows
      gl={{
        antialias: aboutConstants.CANVAS.GL.ANTIALIAS,
        alpha: aboutConstants.CANVAS.GL.ALPHA,
        powerPreference: aboutConstants.CANVAS.GL.POWER_PREFERENCE,
      }}
    >
      <PerspectiveCamera
        makeDefault
        fov={aboutConstants.PERSPECTIVE_CAMERA.FOV}
      />
      <Suspense fallback={null}>
        <Physics debug>
          {!isMobile ? (
            <PointerLockControlsComponent pointerLockControlsSelector={`#${aboutConstants.POINTER_LOCK_CONTROLS.SELECTOR}`} />
          ) : (
            <DeviceOrientationControls />
          )}
          <RapierPlayer
            cameraRotation={
              new THREE.Euler(
                THREE.MathUtils.degToRad(aboutConstants.PERSPECTIVE_CAMERA.ROTATION.X),
                THREE.MathUtils.degToRad(aboutConstants.PERSPECTIVE_CAMERA.ROTATION.Y),
                THREE.MathUtils.degToRad(aboutConstants.PERSPECTIVE_CAMERA.ROTATION.Z),
                'YXZ',
              )
            }
            rigidBodyPosition={
              new THREE.Vector3(
                aboutConstants.PERSPECTIVE_CAMERA.POSITION.X,
                aboutConstants.PERSPECTIVE_CAMERA.POSITION.Y,
                aboutConstants.PERSPECTIVE_CAMERA.POSITION.Z,
              )
            }
            capsuleColliderArgs={[0.5, aboutConstants.PERSPECTIVE_CAMERA.POSITION.Y]}
            speed={aboutConstants.PLAYER.SPEED}
            jumpForce={aboutConstants.PLAYER.JUMP_FORCE}
            pointerLockControlsSelector={aboutConstants.POINTER_LOCK_CONTROLS.SELECTOR}
          />
          <LaboratoireScene />
          <MinecraftScene />
          <PhysicsGround />
          {/* <ToneMapping /> */}
          {/* {isFinalRender && <RealTimeSky />} */}
          {/* <Debug
            color={'red'}
            scale={1.1}
          /> */}
        </Physics>
      </Suspense>
    </Canvas>
  )
}
