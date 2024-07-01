import React from 'react'
import { useDispatch } from 'react-redux'
import { isMobile } from 'react-device-detect'
import { useTranslations } from 'next-intl'

import { AppDispatch } from '@/redux/store'
import { setShowInstructions } from '@/redux/slice/aboutSlice'

import { default as aboutConstants } from '@/constants/new/canvas/about/aboutConstants.json'

import './index.scss'

export default function AboutEnterButton() {
  const t = useTranslations('BUTTONS')

  const dispatch = useDispatch<AppDispatch>()

  const handleOnClick = () => {
    if (isMobile) dispatch(setShowInstructions(false))
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
