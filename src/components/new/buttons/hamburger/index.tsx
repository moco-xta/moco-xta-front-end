import React from 'react'

import { HamburgerInterface } from '@/interfaces/new/buttonsInterfaces'

import './index.scss'

export default function Hamburger({
  menuIsOpen,
  handleSetMenuIsOpen,
}: HamburgerInterface) {
  return (
    <div id='hamburger_icon'>
      <input
        type='checkbox'
        id='hamburger_input'
        className='hamburger_input'
        checked={menuIsOpen}
        onClick={handleSetMenuIsOpen}
      />
      <label
        htmlFor='hamburger_input'
        className='hamburger_label'
      >
        <span className='hamburger_line' />
      </label>
    </div>
  )
}
