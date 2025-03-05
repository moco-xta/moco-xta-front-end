import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useThree } from '@react-three/fiber'
import { PointerLockControls as TPointerLockControls } from 'three-stdlib'

import type { TPlayerPointerLockControls } from '@/types/components/three/types'

import { AppDispatch, RootState } from '@/redux/store'
import { setShowInstructions } from '@/redux/slices/playerPageStateSlice'

import { PointerLockControls } from '@react-three/drei'

export default function PlayerPointerLockControls({
  pointerLockControlsSelector,
}: TPlayerPointerLockControls) {
  const { camera, gl } = useThree()

  const dispatch = useDispatch<AppDispatch>()
  const { showInstructions } = useSelector((state: RootState) => state.playerPageState)

  const controlsRef = useRef<TPointerLockControls>(null!)

  useEffect(() => {
    function pointerLockChange() {
      dispatch(setShowInstructions(!showInstructions))
    }

    document.addEventListener('pointerlockchange', pointerLockChange, false)
    return () => {
      document.removeEventListener('pointerlockchange', pointerLockChange, false)
    }
  }, [dispatch, showInstructions])

  useEffect(() => {
    if (!controlsRef.current.isLocked) dispatch(setShowInstructions(true))
  }, [dispatch])

  return (
    <PointerLockControls
      ref={controlsRef}
      selector={pointerLockControlsSelector}
      args={[camera, gl.domElement]}
    />
  )
}
