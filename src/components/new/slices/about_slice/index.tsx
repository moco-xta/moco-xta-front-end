import React, { useState } from 'react'
import { isMobile } from 'react-device-detect'

import DeviceMotionPermission from './device_motion_permission'

import './index.scss'

export default function AboutSlice() {
  const [permissionGranted, setPermissionGranted] = useState(false)

  return (
    <section id='about_slice'>
      {!isMobile || (isMobile && permissionGranted) ? (
        <p>!isMobile || (isMobile && permissionGranted)</p>
      ) : (
        <DeviceMotionPermission
          permissionGranted={permissionGranted}
          setPermissionGranted={setPermissionGranted}
        />
      )}
    </section>
  )
}
