import React, { CSSProperties, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { FaArrowRight } from 'react-icons/fa6'

import useResize from '@/hooks/new/useResize'

import { getCookieByName } from '@/helpers/new/cookiesHelper'

import { default as localesConstants } from '@/constants/new/localesConstants.json'

import './index.scss'

export default function LocaleSwitcher() {
  const t = useTranslations('HEADER')

  const locale = useLocale()
  const router = useRouter()

  const { isDesktop } = useResize()

  useEffect(() => {
    setIsOpen(false)
  }, [isDesktop])

  const dropdown = useRef<HTMLLIElement>(null)

  const [currentLocale, setCurrentLocale] = useState('en')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setCurrentLocale(getCookieByName('NEXT_LOCALE') || locale)
  }, [locale])

  function handleSetIsOpen() {
    setIsOpen(!isOpen)
  }

  function handleSetCurrentLocale(locale: string) {
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; SameSite=Lax`
    setCurrentLocale(locale)
    setIsOpen(false)
    router.refresh()
  }

  return (
    <li
      id='locale_dropdown'
      ref={dropdown}
      className={`lis ${isOpen ? 'open' : ''}`}
      onClick={handleSetIsOpen}
    >
      <div id='current_locale'>
        <FaArrowRight
          id='caret'
          size={15}
        />
        <span id='selected'>
          {isDesktop
            ? currentLocale.toUpperCase()
            : t(`LOCALES.${currentLocale.toUpperCase()}`)}
        </span>
      </div>
      {isOpen && (
        <ul id='locale_options'>
          {localesConstants.LOCALES.filter(
            (locale_constant) => locale_constant !== locale,
          )
            .sort((a, b) =>
              t(`LOCALES.${a.toUpperCase()}`).localeCompare(
                t(`LOCALES.${b.toUpperCase()}`),
              ),
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
                  <span>{t(`LOCALES.${locale_constant.toUpperCase()}`)}</span>
                </li>
              )
            })}
        </ul>
      )}
    </li>
  )
}
