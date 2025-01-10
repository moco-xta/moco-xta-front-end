import React, { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'

import { getCookieByName } from '@/helpers/cookiesHelpers'

import { localesConstants } from '@/i18n/i18n.config'

import './index.css'

export default function LocaleSwitcher() {
  const router = useRouter()
  const locale = useLocale()

  const [currentLocale, setCurrentLocale] = useState(getCookieByName('NEXT_LOCALE') || locale)

  const localeSwitcherRef = useRef<HTMLLIElement>(null)

  function handleSetCurrentLocale(locale: string) {
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
            .filter((locale_constant: string) => locale_constant !== locale)
            .sort((a: string, b: string) => a.localeCompare(b))
            .map((locale_constant: string) => {
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
