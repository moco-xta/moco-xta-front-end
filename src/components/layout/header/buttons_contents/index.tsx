import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '@/redux/store'

import Menu from './menu'
import LocaleSwitcherOptions from './locale_switcher_options'

import './index.scss'

export default function ButtonsContent() {
  const { menuIsOpen, localeSwitcher } = useSelector((state: RootState) => state.appState)

  return (
    <>
      {(menuIsOpen || localeSwitcher.isOpen) && (
        <div
          id='header_buttons_content'
          className='header_buttons_content_zIndex'
        >
          {menuIsOpen && <Menu />}
          {localeSwitcher.isOpen && <LocaleSwitcherOptions />}
        </div>
      )}
    </>
  )
}
