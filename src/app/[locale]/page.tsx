'use client'

import { useTranslations } from 'next-intl'

import { LocaleSwitcher } from 'components/buttons'

import './index.css'

export default function Home() {
  const t = useTranslations()

  return (
    <div id='page_container'>
      <h1 id='hello_world'>{t('HELLO_WORLD')}</h1>
      <LocaleSwitcher />
    </div>
  )
}
