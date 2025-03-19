import React, { RefObject, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import './index.scss'

export type TImTextByWords = {
  introductionSectionRef: RefObject<HTMLElement>
}

export default function ImText({ introductionSectionRef }: TImTextByWords) {
  const t = useTranslations('HOME.INTRODUCTION')

  const imTextRef = useRef<HTMLSpanElement>(null!)

  useGSAP(
    () => {
      gsap.to('#im_text', {
        scrollTrigger: {
          trigger: introductionSectionRef.current,
          start: 'top center',
          markers: true,
        },
        yPercent: -100,
        opacity: 1,
        duration: 0.5,
        delay: 0.25,
        ease: 'power1.out',
      })
      /* return () => animationFn.kill() */
    },
    { scope: introductionSectionRef },
  )

  return (
    <div id='im_text_wrapper'>
      <span
        ref={imTextRef}
        id='im_text'
        className='introduction_title'
      >
        {t('I_M')}
      </span>
    </div>
  )
}
