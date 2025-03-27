import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTranslations } from 'next-intl'

import { splitTextToCharacters } from '@/helpers/textHelpers'

import './index.scss'

export default function LastProjectsTitle() {
  const t = useTranslations('HOME.LAST_PROJECTS')

  const containerRef = useRef<HTMLDivElement>(null!)

  useGSAP(
    () => {
      gsap.to('.last-projects-title-character', {
        yPercent: -100,
        rotateZ: 0,
        opacity: 1,
        duration: 0.25,
        ease: 'none',
        stagger: 0.075,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      })
    },
    { scope: containerRef },
  )

  return (
    <h2
      ref={containerRef}
      id='last-projects-title'
      className='section-title'
    >
      {splitTextToCharacters(t('SECTION_TITLE')).map((letter, index) => (
        <span
          key={`last-projects-title-character-${index}`}
          className='last-projects-title-character'
        >
          {letter !== ' ' ? letter : '\u00A0'}
        </span>
      ))}
    </h2>
  )
}
