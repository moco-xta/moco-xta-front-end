import React, { CSSProperties, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useLocale, useTranslations } from 'next-intl'
import { FaArrowRight } from 'react-icons/fa6'

import type { TLocales } from '@/types/locales/types'

import { AppDispatch, RootState } from '@/redux/store'
import { setLocaleSwitcherIsOpen } from '@/redux/slices/appStateSlice'

import { getCookieByName } from '@/helpers/cookiesHelpers'

import { localeSwitcherData } from '@/data/menu/header/locale_switcher/localeSwitcherData'

import { localesConstants } from '@/i18n/i18n.config'

import './index.scss'

export default function LocaleSwitcher() {
  const t = useTranslations('LOCALES')

  const router = useRouter()
  const locale = useLocale()
  const dispatch = useDispatch<AppDispatch>()
  const localeSwitcherIsOpen = useSelector(
    (state: RootState) => state.appState.localeSwitcherIsOpen,
  )

  const [currentLocale, setCurrentLocale] = useState(getCookieByName('NEXT_LOCALE') || locale)

  const localeSwitcherRef = useRef<HTMLLIElement>(null)
  const timelineRef = useRef<GSAPTimeline>(gsap.timeline({ paused: true }))

  function handleSetLocaleSwitcherIsOpen(e: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    e.stopPropagation()
    dispatch(setLocaleSwitcherIsOpen(!localeSwitcherIsOpen))
  }

  function handleSetCurrentLocale(localeOption: TLocales) {
    document.cookie = `NEXT_LOCALE=${localeOption}`
    setCurrentLocale(localeOption)
    dispatch(setLocaleSwitcherIsOpen(false))
    router.refresh()
  }

  useGSAP(() => {})

  return (
    <li
      ref={localeSwitcherRef}
      className={`locale_switcher ${localeSwitcherIsOpen ? 'open' : ''}`}
      onClick={handleSetLocaleSwitcherIsOpen}
    >
      <div className='current_locale'>
        <FaArrowRight
          className='caret'
          size={14}
        />
        <span id='selected'>{t(currentLocale.toUpperCase())}</span>
      </div>
      {
        /* localeSwitcherIsOpen &&  */ <ul className='locale_options'>
          {localesConstants
            .filter((localeOption) => localeOption !== currentLocale)
            .sort((a, b) =>
              t(`LOCALES.${a.toUpperCase()}`).localeCompare(t(`LOCALES.${b.toUpperCase()}`)),
            )
            .map((localeOption) => {
              return (
                <li
                  key={`localeSwitcherOption_${localeOption}`}
                  className='locale_option'
                  onClick={() => handleSetCurrentLocale(localeOption)}
                >
                  <span>{t(`${localeOption.toUpperCase()}`)}</span>
                </li>
              )
            })}
        </ul>
      }
    </li>
  )
}
