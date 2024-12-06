import React from 'react'
import { useSelector } from 'react-redux'
import { Box } from '@react-three/drei'
import { isMobile } from 'react-device-detect'

import { RootState } from '@/redux/store'

import AboutDashboard from './about_dahboard'
import AboutGreeting from './about_greeting'
import AboutDesktopCanvas from '../../three/canvas/about_canvas/AboutDesktopCanvas'
import AboutScene from '../../three/canvas/about_canvas/AboutScene'
import DeviceMotionPermission from './device_motion_permission'
import { AboutCanvas } from '@/components/three/canvas'

import './index.scss'

export default function AboutSlice() {
  const { accessToDeviceMotionAndOrientationGranted, showInstructions } = useSelector(
    (state: RootState) => state.about,
  )

  return (
    <>
      {!isMobile || (isMobile && accessToDeviceMotionAndOrientationGranted) ? (
        <>
          <AboutGreeting />
          {!showInstructions && <AboutDashboard />}
          <AboutCanvas />
        </>
      ) : (
        <DeviceMotionPermission />
      )}
    </>
  )
}
