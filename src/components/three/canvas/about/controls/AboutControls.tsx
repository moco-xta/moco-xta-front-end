import React from 'react'
import { DeviceOrientationControls } from '@react-three/drei'
import { isMobile } from 'react-device-detect'

import AboutPlayer from './AboutPlayer'
import AboutPointerLockControls from './AboutPointerLockControls'

import { default as aboutConstants } from '@/constants/three/about/aboutConstants.json'

export default function AboutControls() {
  return (
    <>
      <AboutPlayer />
      {!isMobile ? (
        <AboutPointerLockControls
          pointerLockControlsSelector={`#${aboutConstants.POINTER_LOCK_CONTROLS.SELECTOR}`}
        />
      ) : (
        <DeviceOrientationControls />
      )}
    </>
  )
}
