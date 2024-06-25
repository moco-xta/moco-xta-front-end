import React, { Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/cannon'

import { AppDispatch, RootState } from '@/redux/store'
import { setShowInstructions } from '@/redux/slice/aboutSlice'

import { CannonPlayer } from '../../controls/CannonPlayer'
import LaboratoireScene from './laboratoire/LaboratoireScene'
import PhysicsGround from './minecraft/PhysicsGround'

import { default as aboutConstants } from '@/constants/new/canvas/aboutConstants.json'

export default function AboutCanvas() {
  const dispatch = useDispatch<AppDispatch>()
  const { showInstructions } = useSelector((state: RootState) => state.about)

  function pointerLockChange() {
    dispatch(setShowInstructions(!showInstructions))
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
      <Suspense fallback={null}>
        <Physics>
          <CannonPlayer
            pointerLockControlsSelector={
              aboutConstants.POINTER_LOCK_CONTROLS.SELECTOR
            }
          />
          <LaboratoireScene />
          <PhysicsGround />
        </Physics>
      </Suspense>
    </Canvas>
  )
}
