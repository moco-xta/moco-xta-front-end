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
        {score >= 5 ? (
          <span className='revealed_text'>moco</span>
        ) : (
          <span className='hidden_text'>####</span>
        )}
        <span className='revealed_text'>.</span>
        {score >= 10 ? (
          <span className='revealed_text'>xta</span>
        ) : (
          <span className='hidden_text'>###</span>
        )}
        <span className='revealed_text'>@</span>
        {score >= 15 ? (
          <span className='revealed_text'>gmail</span>
        ) : (
          <span className='hidden_text'>#####</span>
        )}
        <span className='revealed_text'>.</span>
        {score >= 15 ? (
          <span className='revealed_text'>com</span>
        ) : (
          <span className='hidden_text'>###</span>
        )}
      </p>
      <div>{t('PHONE_NUMBER')}</div>
      <p>
        <span className='revealed_text'>+33</span>
        <span className='revealed_text'> </span>
        {score >= 20 ? (
          <span className='revealed_text'>6</span>
        ) : (
          <span className='hidden_text'>##</span>
        )}
        <span className='revealed_text'> </span>
        {score >= 25 ? (
          <span className='revealed_text'>06</span>
        ) : (
          <span className='hidden_text'>##</span>
        )}
        <span className='revealed_text'> </span>
        {score >= 30 ? (
          <span className='revealed_text'>06</span>
        ) : (
          <span className='hidden_text'>##</span>
        )}
        <span className='revealed_text'> </span>
        {score >= 35 ? (
          <span className='revealed_text'>06</span>
        ) : (
          <span className='hidden_text'>##</span>
        )}
        <span className='revealed_text'> </span>
        {score >= 40 ? (
          <span className='revealed_text'>06</span>
        ) : (
          <span className='hidden_text'>##</span>
        )}
      </p>
      <p id='i_dont_want_to_play'>{t('I_DONT_WANT_TO_PLAY')}</p>
    </div>
  )
}
