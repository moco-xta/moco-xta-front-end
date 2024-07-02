import React from 'react'
import { useDispatch } from 'react-redux'
import { FaArrowLeft } from 'react-icons/fa'

import { AppDispatch } from '@/redux/store'
import { setAuthenticationIsOpen } from '@/redux/slice/appStateSlice'

import './index.scss'

export default function ClosingArrow() {
  const dispatch = useDispatch<AppDispatch>()

  const handleSetAuthenticationIsOpen = () => {
    dispatch(setAuthenticationIsOpen(false))
  }

  return (
    <div
      id='closing_arrow_container'
      onClick={handleSetAuthenticationIsOpen}
    >
      <FaArrowLeft />
      <span>Close</span>
    </div>
  )
}
