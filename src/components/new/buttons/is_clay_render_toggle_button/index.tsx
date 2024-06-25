import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '@/redux/store'
import { setIsFinalRender } from '@/redux/slice/aboutSlice'

import ToggleButton from '@/components/buttons/toggle_button'

import './index.scss'

export default function IsClayRenderToggleButton() {
  const { isFinalRender } = useSelector((state: RootState) => state.about)

  return (
    <ToggleButton
      label={['CLAY', 'FINAL']}
      checked={isFinalRender}
      action={setIsFinalRender}
    />
  )
}
