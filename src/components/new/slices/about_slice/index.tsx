import React, { useState } from 'react'
import { isMobile } from 'react-device-detect'

import AboutGreeting from './about_greeting'
/* import IsClayRenderToggleButton from '../../buttons/is_clay_render_toggle_button' */
import QRCodeToAbout from './qr_code_to_about'
import AboutCanvas from '../../three/canvas/about_canvas/AboutCanvas'
import DeviceMotionPermission from './device_motion_permission'

import './index.scss'

export default function AboutSlice() {
  const [permissionGranted, setPermissionGranted] = useState<boolean>(false)
  const [showInstructions, setShowInstructions] = useState<boolean>(true)
  /* const [isClayRender, setIsClayRender] = useState<boolean>(true) */

  return (
    <section id='about_slice'>
      {!isMobile || (isMobile && permissionGranted) ? (
        <>
          <AboutGreeting showInstructions={showInstructions} />
          {/* <IsClayRenderToggleButton
            isClayRender={isClayRender}
            setIsClayRender={setIsClayRender}
          /> */}
          {!isMobile && <QRCodeToAbout />}
          <AboutCanvas
            showInstructions={showInstructions}
            setShowInstructions={setShowInstructions}
          />
        </>
      ) : (
        <DeviceMotionPermission
          permissionGranted={permissionGranted}
          setPermissionGranted={setPermissionGranted}
        />
      )}
    </section>
  )
}
