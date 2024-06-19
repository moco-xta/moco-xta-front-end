import React from 'react'
import { useTranslations } from 'next-intl'

import { AboutEnterButtonInterface } from '@/interfaces/new/buttonsInterfaces'

import './index.scss'

export default function AboutEnterButton({  }: AboutEnterButtonInterface) {
  const t = useTranslations('BUTTONS')

  return (
    <button id='about_enter_button'>{t('ENTER')}</button>
  )
}
