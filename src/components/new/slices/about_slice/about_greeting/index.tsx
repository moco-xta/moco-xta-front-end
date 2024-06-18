import React from 'react'
import { isMobile } from 'react-device-detect'

import { InstructionsInterface } from '@/interfaces/new/componentsInterfaces'

import AboutIntroductionTextBlock from './about_introduction_text_block'
import Instructions from './intructions'

import './index.scss'

export default function AboutGreeting({
  showInstructions,
}: InstructionsInterface) {
  return (
    <div
      id='about_greeting'
      className={`
        ${showInstructions ? 'show_about_greeting' : 'hide_about_greeting'}
        ${!isMobile ? 'is_desktop_about_greeting' : 'is_mobile_about_greeting'}
      `}
    >
      <AboutIntroductionTextBlock />
      <Instructions />
    </div>
  )
}
