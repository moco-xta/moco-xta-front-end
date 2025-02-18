import React from 'react'
import { isMobile } from 'react-device-detect'

import Hero from './hero'
import Disclamer from '../../disclamer'

import './index.scss'

export default function HomePage() {
  return (
    <div id='home_page'>
      <Hero />
      {isMobile && <Disclamer translationKey={'HOME.IS_MOBILE'} />}
    </div>
  )
}
