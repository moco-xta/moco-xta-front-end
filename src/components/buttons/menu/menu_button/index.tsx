import React from 'react'
import { useDispatch } from 'react-redux'

import { AppDispatch } from '@/redux/store'
import { toggleMenu } from '@/redux/slice/appStateSlice'

import './index.scss'

export default function MenuButton() {
  const dispatch = useDispatch<AppDispatch>()

  const handleToggleMenu = () => {
    dispatch(toggleMenu())
  }

  return (
    <div
      id='menu_button'
      onClick={handleToggleMenu}
    >
      Menu
    </div>
  )
}
