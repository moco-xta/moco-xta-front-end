import React, { useState } from 'react'
import { isMobile } from 'react-device-detect'

import AboutGreeting from './about_greeting'
import QRCodeToAbout from './qr_code_to_about'
import AboutDashboard from './about_dahboard'
import AboutCanvas from '../../three/canvas/about_canvas/AboutCanvas'
import DeviceMotionPermission from './device_motion_permission'

import './index.scss'

export default function AboutSlice() {
  const [permissionGranted, setPermissionGranted] = useState<boolean>(false)
  const [showInstructions, setShowInstructions] = useState<boolean>(true)
  const [isClayRender, setIsClayRender] = useState<boolean>(true)

  const handleSetIsClayRender = () => {
    setIsClayRender(!isClayRender)
  }

  return (
    <section id='about_slice'>
      {!isMobile || (isMobile && permissionGranted) ? (
        <>
          {/* <AboutGreeting
            showInstructions={showInstructions}
            handleSetIsClayRender={handleSetIsClayRender}
          /> */}
          {!isMobile && (
            <>
              <QRCodeToAbout />
              {/* <AboutDashboard showInstructions={showInstructions} /> */}
            </>
          )}
          <AboutCanvas
            showInstructions={showInstructions}
            setShowInstructions={setShowInstructions}
            isClayRender={isClayRender}
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
