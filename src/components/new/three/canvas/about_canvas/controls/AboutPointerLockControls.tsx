import React, { useCallback, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useThree } from '@react-three/fiber'
import { PointerLockControls as PointerLockControlsImpl } from 'three-stdlib'

import { PointerLockControlsComponentInterface } from '@/interfaces/new/threeInterfaces'

import { AppDispatch, RootState } from '@/redux/store'
import { setShowInstructions } from '@/redux/slice/aboutSlice'

import { useAboutKeyboard } from '@/hooks/new/useAboutKeyboard'

import { PointerLockControls } from '@react-three/drei'

export default function AboutPointerLockControls({
  pointerLockControlsSelector,
}: PointerLockControlsComponentInterface) {
  const { camera, gl } = useThree()

  const { escape } = useAboutKeyboard()

  const dispatch = useDispatch<AppDispatch>()
  const { showInstructions } = useSelector((state: RootState) => state.about)
  
  const controlsRef = useRef<PointerLockControlsImpl>(null!)
  
  /* useEffect(() => {
    function pointerLockChange() {
      dispatch(setShowInstructions(!showInstructions))
    }

    document.addEventListener('pointerlockchange', pointerLockChange, false)
    return () => {
      document.removeEventListener('pointerlockchange', pointerLockChange, false)
    }
  }) */

  /* useEffect(() => {
    console.log('controlsRef.current', controlsRef.current)
    if (!controlsRef.current.isLocked) dispatch(setShowInstructions(true))
  }, [controlsRef.current]) */

  useEffect(() => {
    console.log('showInstructions', showInstructions)
    if (showInstructions) {
      controlsRef.current.unlock()
    }/*  else {
      controlsRef.current.lock()
    } */
  }, [showInstructions])

  /* const handleKeyDown = useCallback((e: KeyboardEvent) => {
    console.log('e.code', e.code)
    if (e.code === 'Escape') dispatch(setShowInstructions(true))
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown]) */

  return (
    <PointerLockControls
      ref={controlsRef}
      /* selector={pointerLockControlsSelector} */
      args={[camera, gl.domElement]}
    />
  )
}
