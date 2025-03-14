import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocale, useTranslations } from 'next-intl'

import { usePathname, useRouter } from '@/i18n/routing'

import type { TLocales } from '@/types/locales/types'

import { AppDispatch, RootState } from '@/redux/store'
import { toggleLocaleSwitcher } from '@/redux/slices/appStateSlice'

import { localesConstants } from '@/i18n/i18n.config'

import './index.scss'

export default function LocaleSwitcherOptions() {
  const t = useTranslations('LOCALES')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const dispatch = useDispatch<AppDispatch>()

  const localeSwitcherIsOpen = useSelector(
    (state: RootState) => state.appState.localeSwitcherIsOpen,
  )

  function handleSetCurrentLocale(localeOption: TLocales) {
    if (localeSwitcherIsOpen) {
      router.replace({ pathname }, { locale: localeOption })
      dispatch(toggleLocaleSwitcher())
    }
  }

  return (
    <div id='locale_switcher_options'>
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
  )
}
