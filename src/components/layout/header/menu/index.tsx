import React from 'react'

import MenuButton from '../../buttons/menu_button'
import Routes from './routes'

import './index.scss'

export default function Menu() {
  return (
    <div id='menu'>
      <MenuButton />
      <div id='menu_content'>
        <Routes />
      </div>
    </div>
  )
}
