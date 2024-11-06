import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch, RootState } from '@/redux/store'
import { toggleMenu } from '@/redux/slice/appStateSlice'

import './index.scss'

export default function MenuButton() {
  const dispatch = useDispatch<AppDispatch>()

  const menuIsOpen = useSelector((state: RootState) => state.appState.menuIsOpen)

  const handleToggleMenu = () => {
    dispatch(toggleMenu())
  }

  useEffect(() => {
    console.log('TEST BUTTON MENU')
  }, [menuIsOpen])

  return (
    <div
      id='menu_button'
      onClick={handleToggleMenu}
    >
      Menu
    </div>
  )
}
