import React from 'react'
import { useSelector } from 'react-redux'
import { isMobile } from 'react-device-detect'

import { RootState } from '@/redux/store'

import AboutIntroductionTextBlock from './about_introduction_text_block'
import Instructions from './intructions'

import './index.scss'

export default function AboutGreeting() {
  const { showInstructions } = useSelector((state: RootState) => state.about)

  return (
    <div
      id='about_greeting'
      className={`
        prevent_select
        ${showInstructions ? 'show_about_greeting' : 'hide_about_greeting'}
        ${!isMobile ? 'is_desktop_about_greeting' : 'is_mobile_about_greeting'}
      `}
    >
      <AboutIntroductionTextBlock />
      <Instructions />
    </div>
  )
}
