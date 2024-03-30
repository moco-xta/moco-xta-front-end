import React from 'react'

import { HamburgerMenuInterface } from '@/interfaces/buttonsInterfaces'

import './index.scss'

export default function HamburgerMenu({
  handleSetMenuIsOpen,
}: HamburgerMenuInterface) {
  return (
    <div id='hamburger_menu_icon'>
      <input
        type='checkbox'
        id='burger_input'
        className='burger_input'
        onClick={handleSetMenuIsOpen}
      />
      <label
        htmlFor='burger_input'
        className='burger_label'
      >
        <span className='burger_line' />
      </label>
    </div>
  )
}
