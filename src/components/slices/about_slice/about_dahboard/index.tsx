import React from 'react'
import { useSelector } from 'react-redux'
import { isMobile } from 'react-device-detect'

import { RootState } from '@/redux/store'

import AboutTarget from './about_target'
import PressEscToLeave from './press_esc_to_leave'
import MobileKeyboard from './mobile_keyboard'

import './index.scss'

export default function AboutDashboard() {
  const { showInstructions } = useSelector((state: RootState) => state.about)

  return (
    <div
      id='about_dashboard'
      className={`prevent_select ${showInstructions ? 'hide_about_dashboard' : 'show_about_dashboard'}`}
    >
      <AboutTarget />
      {!isMobile ? <PressEscToLeave /> : <MobileKeyboard />}
    </div>
  )
}
