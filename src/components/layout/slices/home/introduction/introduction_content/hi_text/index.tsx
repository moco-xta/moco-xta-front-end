import React, { RefObject, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import './index.scss'

export type THiTextByWords = {
  introductionSectionRef: RefObject<HTMLElement>
}

export default function HiText({ introductionSectionRef }: THiTextByWords) {
  const t = useTranslations('HOME.INTRODUCTION')

  const hiTextRef = useRef<HTMLSpanElement>(null!)

  useGSAP(
    () => {
      const animationFn = gsap
        .to('#hi_text', {
          scrollTrigger: {
            trigger: introductionSectionRef.current,
            start: 'top center',
            markers: true,
          },
          yPercent: -100,
          opacity: 1,
          duration: 0.5,
          ease: 'power1.out',
        })
      return () => animationFn.kill()
    },
    { scope: introductionSectionRef },
  )

  return (
    <div id='hi_text_wrapper'>
      <span
        ref={hiTextRef}
        id='hi_text'
        className='introduction_title'
      >
        {t('HI')}
      </span>
    </div>
  )
}
