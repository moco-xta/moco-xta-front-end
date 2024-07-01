import React from 'react'
import { useThree } from '@react-three/fiber'

import { PointerLockControlsComponentInterface } from '@/interfaces/new/threeInterfaces'

import { PointerLockControls } from '@react-three/drei'

import { default as aboutConstants } from '@/constants/new/canvas/about/aboutConstants.json'

export default function PointerLockControlsComponent({ pointerLockControlsSelector }: PointerLockControlsComponentInterface) {
  const { camera, gl } = useThree()

  return (
    <PointerLockControls
      selector={pointerLockControlsSelector}
      args={[camera, gl.domElement]}
    />
  )
}
