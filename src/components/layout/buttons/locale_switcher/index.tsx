import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocale, useTranslations } from 'next-intl'
import { FaArrowRight } from 'react-icons/fa6'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import type { TLocales } from '@/types/locales/types'

import { usePathname, useRouter } from '@/i18n/routing'

import { AppDispatch, RootState } from '@/redux/store'
import { setLocaleSwitcherIsOpen } from '@/redux/slices/appStateSlice'

import { localesConstants } from '@/i18n/i18n.config'

import './index.scss'

export default function LocaleSwitcher() {
  const t = useTranslations('LOCALES')
  const router = useRouter()
  const locale = useLocale()
  const pathname = usePathname()
  const dispatch = useDispatch<AppDispatch>()
  const localeSwitcherIsOpen = useSelector(
    (state: RootState) => state.appState.localeSwitcherIsOpen,
  )

  const localeSwitcherRef = useRef<HTMLDivElement>(null!)
  const timelineRef = useRef<GSAPTimeline>(gsap.timeline({ paused: true }))

  function handleSetLocaleSwitcherIsOpen(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation()
    dispatch(setLocaleSwitcherIsOpen(!localeSwitcherIsOpen))
  }

  function handleSetCurrentLocale(localeOption: TLocales) {
    if (localeSwitcherIsOpen) {
      router.replace({ pathname }, { locale: localeOption })
      dispatch(setLocaleSwitcherIsOpen(false))
    }
  }

  useGSAP(
    () => {
      gsap.set('.locale_option', { y: -30, opacity: 0.0 })

      timelineRef.current
        .to('.caret', {
          rotate: '90deg',
          duration: 0.2,
          ease: 'power2.out',
        })
        .to(
          '.locale_option',
          {
            duration: 0.2,
            y: 0,
            opacity: 1,
            stagger: -0.1,
            ease: 'power2.out',
          },
          0,
        )
    },
    { scope: localeSwitcherRef },
  )

  useEffect(() => {
    localeSwitcherIsOpen ? timelineRef.current.play() : timelineRef.current.reverse()
  }, [localeSwitcherIsOpen])

  return (
    <div
      ref={localeSwitcherRef}
      className='locale_switcher'
    >
      <div
        className='locale current_locale_wrapper'
        onClick={handleSetLocaleSwitcherIsOpen}
      >
        <FaArrowRight
          className='caret'
          size={14}
        />
        <span
          className='current_locale'
          {...{ currentlocale: t(locale.toUpperCase()) }}
        >
          {t(locale.toUpperCase())}
        </span>
      </div>
      <div className='locale_options'>
        {localesConstants
          .filter((localeOption) => localeOption !== locale)
          .sort((a, b) => a.localeCompare(b))
          .map((localeOption) => {
            return (
              <li
                key={`locale_switcher_option_${localeOption}`}
                className='locale locale_option'
                onClick={() => handleSetCurrentLocale(localeOption)}
              >
                <span>{t(`${localeOption.toUpperCase()}`)}</span>
              </li>
            )
          })}
      </div>
    </div>
  )
}
