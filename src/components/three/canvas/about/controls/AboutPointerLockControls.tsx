import React, { useCallback, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useThree } from '@react-three/fiber'
import { PointerLockControls as PointerLockControlsImpl } from 'three-stdlib'

import { PointerLockControlsComponentInterface } from '@/interfaces/threeInterfaces'

import { AppDispatch, RootState } from '@/redux/store'
import { setShowInstructions } from '@/redux/slice/aboutSlice'

import { useAboutKeyboard } from '@/hooks/useAboutKeyboard'

import { PointerLockControls } from '@react-three/drei'

export default function AboutPointerLockControls({
  pointerLockControlsSelector,
}: PointerLockControlsComponentInterface) {
  const { camera, gl } = useThree()

  /* const { escape } = useAboutKeyboard() */

  const dispatch = useDispatch<AppDispatch>()
  const { showInstructions } = useSelector((state: RootState) => state.about)

  const controlsRef = useRef<PointerLockControlsImpl>(null!)

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

  /* useEffect(() => {
    console.log('showInstructions', showInstructions)
    if (showInstructions) {
      controlsRef.current.unlock()
    }  else {
      controlsRef.current.lock()
    }
  }, [showInstructions]) */

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
      selector={pointerLockControlsSelector}
      args={[camera, gl.domElement]}
    />
  )
}
