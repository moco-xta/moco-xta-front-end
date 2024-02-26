import React from 'react'
import { useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'

import { default as LocalesConstants } from '@/constants/localesConstants.json'

import './index.scss'

export default function LocaleSwitcher() {
  const locale = useLocale()
  const router = useRouter()

  const handleSwitchLocale = (e: React.ChangeEvent<HTMLSelectElement>) => {
    document.cookie = `NEXT_LOCALE=${e.target.value}; path=/; max-age=31536000; SameSite=Lax`
    router.refresh()
  }

  return (
    <select
      value={locale}
      onChange={handleSwitchLocale}
    >
      {LocalesConstants.LOCALES.map((locale) => (
        <option
          key={`localeSwitcherOption_${locale}`}
          value={locale}
        >
          {locale}
        </option>
      ))}
    </select>
  )
}

// TODO: TR¡ranslated URLs
