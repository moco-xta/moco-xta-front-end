import React, { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'

import type { TLocales } from '@/types/locales/types'

import { getCookieByName } from '@/helpers/cookiesHelpers'

import { localesConstants } from '@/i18n/i18n.config'

import './index.scss'

export default function LocaleSwitcher() {
  const router = useRouter()
  const locale = useLocale()

  const [currentLocale, setCurrentLocale] = useState(getCookieByName('NEXT_LOCALE') || locale)

  const localeSwitcherRef = useRef<HTMLLIElement>(null)

  function handleSetCurrentLocale(locale: TLocales) {
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; SameSite=Lax`
    setCurrentLocale(locale)
    router.refresh()
  }

  return (
    <li ref={localeSwitcherRef}>
      <div>
        <span>{currentLocale.toUpperCase()}</span>
        <ul>
          {localesConstants
            .filter((locale_constant: TLocales) => locale_constant !== locale)
            .sort((a: TLocales, b: TLocales) => a.localeCompare(b))
            .map((locale_constant: TLocales) => {
              return (
                <li
                  key={`localeSwitcherOption_${locale_constant}`}
                  onClick={() => handleSetCurrentLocale(locale_constant)}
                >
                  <span>{locale_constant.toUpperCase()}</span>
                </li>
              )
            })}
        </ul>
      </div>
    </li>
  )
}
