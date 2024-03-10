import React from 'react'

import variables from '@/styles/variables.module.scss'

import './index.scss'

interface HamburgerMenuIconInterface {
  handleSetMenuIsOpen: () => void
}

export default function HamburgerMenuIcon({
  handleSetMenuIsOpen,
}: HamburgerMenuIconInterface) {
  /* return (
    <svg
      id='hamburger_menu_icon'
      xmlns='http://www.w3.org/2000/svg'
      height='24'
      viewBox='0 -960 960 960'
      width='24'
      fill={variables.black}
      onClick={handleSetMenuIsOpen}
    >
      <path d='M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z' />
    </svg>
  ) */

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
