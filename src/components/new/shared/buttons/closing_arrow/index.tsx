import React from 'react'
import { useDispatch } from 'react-redux'

import { AppDispatch } from '@/redux/store'
import { setAuthenticationIsOpen } from '@/redux/slice/appStateSlice'

import './index.scss'

export default function ClosingArrow() {
  const dispatch = useDispatch<AppDispatch>()

  const handleSetAuthenticationIsOpen = () => {
    dispatch(setAuthenticationIsOpen(false))
  }

  return (
    <div id='closing_arrow_container'>
      <div id='closing_arrow_icon'>
        <input
          type='checkbox'
          id='closing_arrow_input'
          className='closing_arrow_input'
          checked={true}
          onClick={handleSetAuthenticationIsOpen}
        />
        <label
          htmlFor='closing_arrow_input'
          className='closing_arrow_label'
        >
          <span className='closing_arrow_line' />
        </label>
      </div>
      <span>Close</span>
    </div>
  )
}
