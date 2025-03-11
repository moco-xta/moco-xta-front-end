import React from 'react'
import { useDispatch, /* useSelector */ } from 'react-redux'
import { useLocale, useTranslations } from 'next-intl'
import { FaArrowRight } from 'react-icons/fa'
import { RiTranslate2 } from 'react-icons/ri'

import { AppDispatch, /* RootState */ } from '@/redux/store'
import { toggleLocaleSwitcher } from '@/redux/slices/appStateSlice'

import './index.scss'
import { helveticaRomanFont } from '@/app/fonts'

export default function LocaleSwitcherButton() {
  const t = useTranslations('LOCALES')
  const locale = useLocale()
  const dispatch = useDispatch<AppDispatch>()

  // const localeSwitcherIsOpen = useSelector((state: RootState) => state.appState.menuIsOpen)

  const handleLocaleSwitcherIsOpen = () => {
    dispatch(toggleLocaleSwitcher())
  }

  return (
    <button
      id='locale_switcher_button'
      className={`${helveticaRomanFont.className}`}
      onClick={handleLocaleSwitcherIsOpen}
    >
      <FaArrowRight />
      {t(locale.toUpperCase())}
      <RiTranslate2 />
    </button>
  )
}
