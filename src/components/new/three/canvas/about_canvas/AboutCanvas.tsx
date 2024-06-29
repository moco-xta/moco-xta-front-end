import React, { Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Canvas } from '@react-three/fiber'
import { DeviceOrientationControls, PerspectiveCamera } from '@react-three/drei'
import { Debug, Physics } from '@react-three/cannon'
import { isMobile } from 'react-device-detect'

import { AppDispatch, RootState } from '@/redux/store'
import { setShowInstructions } from '@/redux/slice/aboutSlice'

import { CannonPlayer } from '../../controls/CannonPlayer'
import LaboratoireScene from './laboratoire/LaboratoireScene'
import PhysicsGround from './PhysicsGround'
import RealTimeSky from './RealTimeSky'
import ToneMapping from './ToneMapping'

import { default as aboutConstants } from '@/constants/new/canvas/about/aboutConstants.json'
import MinecraftScene from './minecraft/MinecraftScene'

export default function AboutCanvas() {
  const dispatch = useDispatch<AppDispatch>()
  const { showInstructions, isFinalRender } = useSelector((state: RootState) => state.about)

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
      <PerspectiveCamera
        makeDefault
        fov={aboutConstants.PERSPECTIVE_CAMERA.FOV}
      />
      <Suspense fallback={null}>
        <Physics>
          {isMobile && <DeviceOrientationControls />}
          <CannonPlayer pointerLockControlsSelector={aboutConstants.POINTER_LOCK_CONTROLS.SELECTOR} />
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
