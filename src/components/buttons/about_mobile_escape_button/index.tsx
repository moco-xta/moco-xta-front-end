import React from 'react'
import { useDispatch } from 'react-redux'

import { AppDispatch } from '@/redux/store'
import { setShowInstructions } from '@/redux/slice/aboutSlice'

import EscapeKey from '@/components/shared/keyboard_keys/EscapeKey'

export default function AboutMobileEscapeButton() {
  const dispatch = useDispatch<AppDispatch>()

  const handleAction = () => {
    dispatch(setShowInstructions(true))
  }
  return <EscapeKey handleAction={handleAction} />
}
