import React from 'react'
import { useSelector } from 'react-redux'
import { useTranslations } from 'next-intl'

import { RootState } from '@/redux/store'

import './index.scss'

export default function Contacts() {
  const t = useTranslations('CONTACT.SNAKE_GAME')

  const { score } = useSelector((state: RootState) => state.snakeGame)

  return (
    <div id='contacts'>
      <p>{t('EMAIL')}</p>
      <p>
        <span>{score >= 5 ? 'moco' : '####'}</span>
        <span>.</span>
        <span>{score >= 10 ? 'xta' : '###'}</span>
        <span>@</span>
        <span>{score >= 15 ? 'gmail' : '#####'}</span>
        <span>.</span>
        <span>{score >= 15 ? 'com' : '###'}</span>
      </p>
      <div>{t('PHONE_NUMBER')}</div>
      <p>
        <span>{score >= 20 ? '06' : '##'}</span>
        <span>-</span>
        <span>{score >= 25 ? '06' : '##'}</span>
        <span>-</span>
        <span>{score >= 30 ? '06' : '##'}</span>
        <span>-</span>
        <span>{score >= 35 ? '06' : '##'}</span>
        <span>-</span>
        <span>{score >= 40 ? '06' : '##'}</span>
      </p>
      <p>{t('I_DONT_WANT_TO_PLAY')}</p>
    </div>
  )
}
