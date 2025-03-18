import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocale, useTranslations } from 'next-intl'

import type { TLocales } from '@/types/locales/types'

import { usePathname, useRouter } from '@/i18n/routing'

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

  const localeSwitcher = useSelector((state: RootState) => state.appState.localeSwitcher)

  function handleSetCurrentLocale(localeOption: TLocales) {
    if (localeSwitcher.isOpen) {
      router.replace({ pathname }, { locale: localeOption })
      dispatch(toggleLocaleSwitcher())
    }
  }

  return (
    <div
      id='locale_switcher_options'
      style={{
        width: `${localeSwitcher.contentDimensions.width}px`,
        top: `${localeSwitcher.contentPosition.top}px`,
        left: `${localeSwitcher.contentPosition.left}px`,
      }}
    >
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
              <span>{t(`${localeOption.toUpperCase()}`).toUpperCase()}</span>
            </li>
          )
        })}
    </div>
  )
}
