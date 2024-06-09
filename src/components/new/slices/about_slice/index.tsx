import React, { useState } from 'react'
import { isMobile } from 'react-device-detect'

import AboutCanvas from '../../three/canvas/about_canvas/AboutCanvas'
import DeviceMotionPermission from './device_motion_permission'

import './index.scss'

export default function AboutSlice() {
  const [permissionGranted, setPermissionGranted] = useState(false)

  return (
    <section id='about_slice'>
      {!isMobile || (isMobile && permissionGranted) ? (
        <AboutCanvas />
      ) : (
        <DeviceMotionPermission
          permissionGranted={permissionGranted}
          setPermissionGranted={setPermissionGranted}
        />
      )}
    </section>
  )
}
