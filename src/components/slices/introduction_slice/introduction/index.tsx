import React from 'react'
import { useTranslations } from 'next-intl'

import RevealComponent from '@/components/shared/reveal_component'

import './index.scss'

export default function Introduction() {
  const t = useTranslations('HOME')

  return (
    <div id='introduction_text_container'>
      <RevealComponent
          y={100}
          duration={'500ms'}
          threshold={0.75}
        >
          <h2 className='gradient_text'>{t('INTRODUCTION.INTRODUCTION_TITLE')}</h2>
        </RevealComponent>

        <RevealComponent
          y={100}
          duration={'500ms'}
          threshold={0.75}
        >
          <p>{t('INTRODUCTION.INTRODUCTION_TEXT')}</p>
        </RevealComponent>
    </div>
  )
}
