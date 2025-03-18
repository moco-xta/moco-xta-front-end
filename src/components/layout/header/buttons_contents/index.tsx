import React from 'react'

import Menu from './menu'
import LocaleSwitcherOptions from './locale_switcher_options'

import './index.scss'

export default function ButtonsContent() {
  return (
    <div
      id='header_buttons_content'
      className='header_buttons_content_zIndex'
    >
      <Menu />
      <LocaleSwitcherOptions />
    </div>
  )
}
