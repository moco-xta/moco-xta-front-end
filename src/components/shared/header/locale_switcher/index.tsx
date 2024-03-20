import React, { CSSProperties, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { IoIosArrowUp } from 'react-icons/io'

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
    <div className='select_locale_dropdowwn'>
      <div
        className={`select_locale_dropdowwn_button ${isActive ? 'locale_dropdown_active' : ''}`}
        onClick={handleSetIsActive}
      >
        <div id='select_locale_dropdowwn_text'>{selected.toUpperCase()}</div>
        <IoIosArrowUp className='select_locale_dropdown_arrow_icon' />
      </div>
      <ul className='locale_options_list'>
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
                className='locale_option'
                style={cssVar}
                onClick={() => handleSetSelected(locale_constant)}
              >
                <span className='locale_option_text'>
                  {t(`LOCALES.${locale_constant.toUpperCase()}`)}
                </span>
              </li>
            )
          })}
      </ul>
    </div>
  )
}

// TODO: Translated URLs
