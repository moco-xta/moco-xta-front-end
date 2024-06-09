import React, { useState } from 'react'
import { isMobile } from 'react-device-detect'

import './index.scss'

export default function AboutSlice() {
  const [permissionGranted, setPermissionGranted] = useState(false)

  return <section id='about_slice'>
  {!isMobile || (isMobile && permissionGranted) ? (
    <p>!isMobile || (isMobile && permissionGranted)</p>
  ) : (
    <p>isMobile && !permissionGranted</p>
  )}
  </section>
}
