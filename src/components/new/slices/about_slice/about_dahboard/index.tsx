import React from 'react'

import { AboutDashboardInterface } from '@/interfaces/new/componentsInterfaces'

import AboutTarget from './about_target'
import PressEscToLeave from './press_esc_to_leave'

import './index.scss'

export default function AboutDashboard({
  showInstructions,
}: AboutDashboardInterface) {
  return (
    <div
      id='about_dashboard'
      className={`${showInstructions ? 'hide_about_dashboard' : 'show_about_dashboard'}`}
    >
      <AboutTarget />
      <PressEscToLeave showInstructions={showInstructions} />
    </div>
  )
}
