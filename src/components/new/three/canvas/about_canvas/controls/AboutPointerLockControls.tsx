import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useThree } from '@react-three/fiber'

import { PointerLockControlsComponentInterface } from '@/interfaces/new/threeInterfaces'

import { AppDispatch, RootState } from '@/redux/store'
import { setShowInstructions } from '@/redux/slice/aboutSlice'

import { PointerLockControls } from '@react-three/drei'

export default function AboutPointerLockControls({
  pointerLockControlsSelector,
}: PointerLockControlsComponentInterface) {
  const { camera, gl } = useThree()

  const dispatch = useDispatch<AppDispatch>()
  const { showInstructions } = useSelector((state: RootState) => state.about)

  useEffect(() => {
    function pointerLockChange() {
      dispatch(setShowInstructions(!showInstructions))
    }

    document.addEventListener('pointerlockchange', pointerLockChange, false)
    return () => {
      document.removeEventListener('pointerlockchange', pointerLockChange, false)
    }
  })

  useEffect(() => {
    console.log('showInstructions', showInstructions)
  }, [showInstructions])

  return (
    <PointerLockControls
      selector={pointerLockControlsSelector}
      args={[camera, gl.domElement]}
    />
  )
}
