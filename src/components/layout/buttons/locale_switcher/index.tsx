import React, { useEffect, useRef, useState } from 'react'
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

  function handleSetCurrentLocale(localesConstant: TLocales) {
    document.cookie = `NEXT_LOCALE=${localesConstant}`
    setCurrentLocale(localesConstant)
    router.refresh()
  }

  return (
    <li ref={localeSwitcherRef}>
      <div>
        <span>{currentLocale.toUpperCase()}</span>
        <ul>
          {localesConstants
            .filter((localeConstant: TLocales) => localeConstant !== currentLocale)
            .sort((a: TLocales, b: TLocales) => a.localeCompare(b))
            .map((localeConstant: TLocales) => {
              return (
                <li
                  key={`localeSwitcherOption_${localeConstant}`}
                  onClick={() => handleSetCurrentLocale(localeConstant)}
                >
                  <span>{localeConstant.toUpperCase()}</span>
                </li>
              )
            })}
        </ul>
      </div>
    </li>
  )
}
