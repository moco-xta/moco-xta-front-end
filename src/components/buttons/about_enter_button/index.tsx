import React from 'react'
import { useDispatch } from 'react-redux'
import { useTranslations } from 'next-intl'

import { AppDispatch } from '@/redux/store'
import { setShowInstructions } from '@/redux/slice/aboutSlice'

import { default as aboutConstants } from '@/constants/new/canvas/about/aboutConstants.json'

import './index.scss'

export default function AboutEnterButton() {
  const t = useTranslations('BUTTONS')

  const dispatch = useDispatch<AppDispatch>()

  const handleOnClick = () => {
    dispatch(setShowInstructions(false))
  }

  return (
    <button
      id={aboutConstants.POINTER_LOCK_CONTROLS.SELECTOR}
      onClick={handleOnClick}
    >
      {t('ENTER')}
    </button>
  )
}
