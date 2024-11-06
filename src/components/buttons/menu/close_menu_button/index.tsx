import React from 'react'
import { useDispatch } from 'react-redux'

import { AppDispatch } from '@/redux/store'
import { toggleMenu } from '@/redux/slice/appStateSlice'

import './index.scss'

export default function CloseMenuButton() {
  const dispatch = useDispatch<AppDispatch>()

  const handleToggleMenu = () => {
    dispatch(toggleMenu())
  }

  return (
    <div
      id='close_menu_button'
      className='toggle_menu_button'
      onClick={handleToggleMenu}
    >
      Close
    </div>
  )
}
