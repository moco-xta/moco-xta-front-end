import React from 'react'

import DisplacementKeys from './displacement_keys'
import AboutMobileEscapeButton from '@/components/buttons/about_mobile_escape_button'

import './index.scss'

export default function MobileKeyboard() {
  return (
    <div id='mobile_keyboard'>
      <DisplacementKeys />
      <AboutMobileEscapeButton />
    </div>
  )
}
