import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { isMobile } from 'react-device-detect'

import { RootState } from '@/redux/store'

import AboutIntroductionTextBlock from './about_introduction_text_block'
import Instructions from './intructions'

import './index.scss'

export default function AboutGreeting() {
  const { showInstructions } = useSelector((state: RootState) => state.about)

  const aboutGreetingRef = useRef<HTMLDivElement>(null!)

  /* useEffect(() => {
    if (aboutGreetingRef.current) aboutGreetingRef.current.style.display =  Number(aboutGreetingRef.current.style.opacity) === 0 ? 'none' : 'flex'
    console.log('aboutGreetingRef.current', aboutGreetingRef)
  }, [aboutGreetingRef.current]) */

  return (
    <div
      ref={aboutGreetingRef}
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
