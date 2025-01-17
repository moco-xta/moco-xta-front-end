import React from 'react'

import Header from '../header'
import Router from './router'
/* import { LocaleSwitcher } from '../../buttons' */

import './index.scss'

export default function MenuOverlay() {
  return (
    <div
      id='menu_overlay'
      className='menu_overlay_zIndex'
    >
      <Header />
      <div id='menu_content'>
        <Router />
        {/* <LocaleSwitcher /> */}
      </div>
    </div>
  )
}
