import React, { CSSProperties, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { useLocale, useTranslations } from 'next-intl'
import { FaArrowRight } from 'react-icons/fa6'

import useIsLargeScreen from '@/hooks/useIsLargeScreen'

import { AppDispatch, RootState } from '@/redux/store'
import { setLocaleSwitcherIsOpen } from '@/redux/slice/appStateSlice'

import { getCookieByName } from '@/helpers/cookiesHelpers'

import { default as localesConstants } from '@/constants/localesConstants.json'

import './index.scss'

export default function LocaleSwitcher() {
  const t = useTranslations('LOCALES')

  const locale = useLocale()
  const router = useRouter()

  const dispatch = useDispatch<AppDispatch>()

  const localeSwitcherIsOpen = useSelector(
    (state: RootState) => state.appState.localeSwitcherIsOpen,
  )

  const { isLargeScreen } = useIsLargeScreen()

  const dropdown = useRef<HTMLLIElement>(null)

  const [currentLocale, setCurrentLocale] = useState('en')

  useEffect(() => {
    setCurrentLocale(getCookieByName('NEXT_LOCALE') || locale)
  }, [locale])

  const handleSetLocaleSwitcherIsOpen = () => {
    dispatch(setLocaleSwitcherIsOpen(!localeSwitcherIsOpen))
  }

  useEffect(() => {
    dispatch(setLocaleSwitcherIsOpen(false))
  }, [dispatch, isLargeScreen])

  function handleSetCurrentLocale(locale: string) {
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; SameSite=Lax`
    setCurrentLocale(locale)
    handleSetLocaleSwitcherIsOpen()
    router.refresh()
  }

  return (
    <li
      id='locale_dropdown'
      ref={dropdown}
      className={`lis ${localeSwitcherIsOpen ? 'open' : ''}`}
      onClick={handleSetLocaleSwitcherIsOpen}
    >
      <div id='current_locale'>
        <FaArrowRight
          id='caret'
          size={14}
        />
        <span
          id='selected'
          title={t('SELECT_YOUR_LANGUAGE')}
        >
          {isLargeScreen ? currentLocale.toUpperCase() : t(currentLocale.toUpperCase())}
        </span>
      </div>
      {localeSwitcherIsOpen && (
        <ul id='locale_options'>
          {localesConstants.LOCALES.filter((locale_constant) => locale_constant !== locale)
            .sort((a, b) =>
              t(`LOCALES.${a.toUpperCase()}`).localeCompare(t(`LOCALES.${b.toUpperCase()}`)),
            )
            .map((locale_constant, index) => {
              const cssVar = {
                '--i': localesConstants.LOCALES.length - index,
              } as CSSProperties

              return (
                <li
                  key={`localeSwitcherOption_${locale_constant}`}
                  className='locale_option'
                  style={cssVar}
                  onClick={() => handleSetCurrentLocale(locale_constant)}
                >
                  <span title={t('HEADER.LOG_OUT')}>{t(`${locale_constant.toUpperCase()}`)}</span>
                </li>
              )
            })}
        </ul>
      )}
    </li>
  )
}
