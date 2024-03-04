import React from 'react'
import { useTranslations } from 'next-intl'
import { MdComputer } from 'react-icons/md'

import RevealComponent from '@/components/shared/reveal_component'

import './index.scss'

export default function HeadText() {
  const t = useTranslations('HOME')

  return (
    <div id='head_text'>
      <p id='role'>
        <MdComputer />
        <span>Creative developer</span>
      </p>
      <RevealComponent
        x={100}
        y={100}
        duration={'500ms'}
        threshold={0.75}
      >
        <h1 id='heading'>
          {t('HERO.HI_I_AM')} <span className='gradient_text'>Federico</span>
        </h1>
      </RevealComponent>
      <RevealComponent
        x={100}
        y={100}
        duration={'500ms'}
        threshold={0.75}
      >
        <h3 id='subheading'>
          {t('HERO.SUBHEADING')}
        </h3>
      </RevealComponent>
    </div>
  )
}
