import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch, RootState } from '@/redux/store'
import { setMenuIsOpen, setAuthenticationIsOpen } from '@/redux/slice/appStateSlice'

import './index.scss'

export default function Hamburger({}) {
  const dispatch = useDispatch<AppDispatch>()

  const menuIsOpen = useSelector(
    (state: RootState) => state.appState.menuIsOpen,
  )

  const handleSetMenuIsOpen = () => {
    dispatch(setMenuIsOpen(!menuIsOpen))
    dispatch(setAuthenticationIsOpen(false))
  }

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
