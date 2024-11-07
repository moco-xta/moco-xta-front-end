import React from 'react'

import Header from '../../header'

import Router from './router'
import PersonalInformation from './personal_information'

import './index.scss'

export default function MenuOverlay() {
  return (
    <div id='menu_overlay'>
      <Header />
      <div id='menu_content'>
        <Router />
        <PersonalInformation />
      </div>
    </div>
  )
}
