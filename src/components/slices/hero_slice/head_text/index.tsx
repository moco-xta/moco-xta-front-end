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
        <span>{t('HERO.CREATIVE_DEVELOPER')}</span>
      </p>
      <RevealComponent
        threshold={0.75}
        duration={'500ms'}
        y={100}
      >
        <h1 id='heading'>
          {t('HERO.HI_I_AM')}
          {/* <span className='hi_i_am'>
            <span>1</span>
            <span>1</span>
            <span>1</span>
            <span>1</span>
            <span>1</span>
            <span>1</span>
            <span>1</span>
          </span> */}
          <span className='gradient_text'>Federico</span>
          {/* <span>
            {returnArrayOfCharacters(t('HERO.HI_I_AM')).map(
              (character, index) => (
                <span>{character}</span>
              ),
            )}
          </span>
          <span className='gradient_text'>
            {returnArrayOfCharacters('Federico').map(
              (character, index) => (
                <span>{character}</span>
              ),
            )}
          </span> */}
        </h1>
      </RevealComponent>
      <RevealComponent
        threshold={0.75}
        duration={'500ms'}
        delay={'200ms'}
        y={100}
      >
        <h3 id='subheading'>{t('HERO.SUBHEADING')}</h3>
      </RevealComponent>
    </div>
  )
}
