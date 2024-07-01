import React from 'react'
import { useSelector } from 'react-redux'
import { isMobile } from 'react-device-detect'

import { RootState } from '@/redux/store'

import AboutDashboard from './about_dahboard'
import AboutGreeting from './about_greeting'
import AboutCanvas from '../../three/canvas/about_canvas/AboutCanvas'
import DeviceMotionPermission from './device_motion_permission'

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

// ----------------------------------------------------------------
// Z-INDEXES
// 0: AboutCanvas
// 1:
// 2:
// 3:
// 4: AboutGreeting
