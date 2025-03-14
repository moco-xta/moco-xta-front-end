import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '@/redux/store'

import Menu from './menu'
import LocaleSwitcherOptions from './locale_switcher_options'

import './index.scss'

export default function ButtonsContent() {
  const { menuIsOpen, localeSwitcherIsOpen } = useSelector((state: RootState) => state.appState)

  return (
    <>
      {(menuIsOpen || localeSwitcherIsOpen) && (
        <div
          id='header_buttons_content'
          className='header_buttons_content_zIndex'
        >
          {menuIsOpen && <Menu />}
          {localeSwitcherIsOpen && <LocaleSwitcherOptions />}
        </div>
      )}
    </>
  )
}
