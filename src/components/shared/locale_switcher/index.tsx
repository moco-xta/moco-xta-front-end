import React, { CSSProperties, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'
import { IoIosArrowUp } from 'react-icons/io'

import { default as LocalesConstants } from '@/constants/localesConstants.json'

import { getCookieByName } from '@/helpers/cookiesHelper'

import './index.scss'

export default function LocaleSwitcher() {
  const locale = useLocale()
  const router = useRouter()

  const [isActive, setIsActive] = useState(false)
  const [selected, setSelected] = useState('en')

  function handleSetIsActive() {
    setIsActive(!isActive)
  }

  useEffect(() => {
    setSelected(getCookieByName('NEXT_LOCALE') || locale)
  }, [])

  function handleSetSelected(locale: string) {
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; SameSite=Lax`
    setSelected(locale)
    setIsActive(false)
    router.refresh()
  }
  const cssVar1 = { '--i': 3 } as CSSProperties
  const cssVar2 = { '--i': 2 } as CSSProperties
  const cssVar3 = { '--i': 1 } as CSSProperties

  return (
    <div className='select_locale_dropdowwn'>
      <div
        className={`select_locale_dropdowwn_button ${isActive ? 'locale_dropdown_active' : ''}`}
        onClick={handleSetIsActive}
      >
        <span id='select_locale_dropdowwn_text'>{selected}</span>
        <IoIosArrowUp className='select_locale_dropdown_arrow_icon' />
      </div>
      <ul className='locale__options_list'>
        {LocalesConstants.LOCALES.map((locale, index) => {
          const cssVar = {
            '--i': LocalesConstants.LOCALES.length - index,
          } as CSSProperties
          return (
            <li
              key={`localeSwitcherOption_${locale}`}
              className='locale_option'
              style={cssVar}
              onClick={() => handleSetSelected(locale)}
            >
              <span className='locale_option_text'>{locale}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

// TODO: Translated URLs
