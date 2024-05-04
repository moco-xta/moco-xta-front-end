import React from 'react'

import { HamburgerMenuInterface } from '@/interfaces/buttonsInterfaces'

import './index.scss'

export default function HamburgerMenu({
  menuIsOpen,
  handleSetMenuIsOpen,
}: HamburgerMenuInterface) {
  return (
    <div id='hamburger_menu_icon'>
      <input
        type='checkbox'
        id='hamburger_menu_input'
        className='hamburger_menu_input'
        checked={menuIsOpen}
        onClick={handleSetMenuIsOpen}
      />
      <label
        htmlFor='hamburger_menu_input'
        className='hamburger_menu_label'
      >
        <span className='hamburger_menu_line' />
      </label>
    </div>
  )
}
