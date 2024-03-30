import React, { CSSProperties, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { TiArrowSortedUp } from 'react-icons/ti'

import { default as LocalesConstants } from '@/constants/localesConstants.json'

import { getCookieByName } from '@/helpers/cookiesHelper'

import './index.scss'

export default function LocaleSwitcher() {
  const locale = useLocale()
  const t = useTranslations('HEADER')
  const router = useRouter()

  const [isActive, setIsActive] = useState(false)
  const [selected, setSelected] = useState('en')

  function handleSetIsActive() {
    setIsActive(!isActive)
  }

  useEffect(() => {
    setSelected(getCookieByName('NEXT_LOCALE') || locale)
  }, [locale])

  function handleSetSelected(locale: string) {
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; SameSite=Lax`
    setSelected(locale)
    setIsActive(false)
    router.refresh()
  }

  return (
    <li
      id='dropdown'
      className={`${isActive ? 'active' : ''}`}
      onClick={handleSetIsActive}
    >
      <div id='select' className='flex_row blur_background_medium small_border_radius'>
        <span id='selected'>{selected.toUpperCase()}</span>
        <TiArrowSortedUp id='caret' size={15} />
      </div>
      {isActive && (
        <ul id='options' className='flex_column'>
          {LocalesConstants.LOCALES.filter(
            (locale_constant) => locale_constant !== locale,
          )
            .sort((a, b) =>
              t(`LOCALES.${a.toUpperCase()}`).localeCompare(
                t(`LOCALES.${b.toUpperCase()}`),
              ),
            )
            .map((locale_constant, index) => {
              const cssVar = {
                '--i': LocalesConstants.LOCALES.length - index,
              } as CSSProperties
              return (
                <li
                  key={`localeSwitcherOption_${locale_constant}`}
                  className='option blur_background_medium'
                  style={cssVar}
                  onClick={() => handleSetSelected(locale_constant)}
                >
                  <span className='option_text'>
                    {t(`LOCALES.${locale_constant.toUpperCase()}`)}
                  </span>
                </li>
              )
            })}
        </ul>
      )}
    </li>
  )
}

// TODO: Translated URLs
