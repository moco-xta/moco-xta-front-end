import React, { RefObject, useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTranslations } from 'next-intl'

import './index.scss'
import { helveticaMediumFont } from '@/app/fonts'

export type TIntroductionContent = {
  introductionSectionRef: RefObject<HTMLElement>
}

export type TextRevealed = {
  id: string
  text: string
}

function TextRevealed({ id, text }: TextRevealed) {
  return (
    <div className='text_revealed'>
      <span
        id={id}
        className='introduction_title'
      >
        {text}
        &nbsp;
      </span>
    </div>
  )
}

export default function IntroductionContent({ introductionSectionRef }: TIntroductionContent) {
  const t = useTranslations('HOME.INTRODUCTION')

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: introductionSectionRef.current,
        start: 'top center',
        markers: true,
      },
    })

    tl.to('#hi_text', {
      yPercent: -100,
      opacity: 1,
      duration: 0.5,
      ease: 'power1.out',
    })
      .to('#im_text', {
        yPercent: -100,
        opacity: 1,
        duration: 0.5,
        ease: 'power1.out',
      })
      .to('#federico_text', {
        yPercent: -100,
        opacity: 1,
        duration: 0.5,
        ease: 'power1.out',
      })
      .to('#a_text', {
        yPercent: -100,
        opacity: 1,
        duration: 0.5,
        ease: 'power1.out',
      })
      .to('#front_end_text', {
        yPercent: -100,
        opacity: 1,
        duration: 0.5,
        ease: 'power1.out',
      })
      .to('#developer_text', {
        yPercent: -100,
        opacity: 1,
        duration: 0.5,
        ease: 'power1.out',
      })
  })

  return (
    <div
      id='introduction_content'
      className={`${helveticaMediumFont.className}`}
    >
      <TextRevealed
        id={'hi_text'}
        text={t('HI')}
      />
      <TextRevealed
        id={'im_text'}
        text={t('I_M')}
      />
      <TextRevealed
        id={'federico_text'}
        text={'Federico'}
      />
      <br />
      <TextRevealed
        id={'a_text'}
        text={t('A')}
      />
      <TextRevealed
        id={'front_end_text'}
        text={t('FRONT_END')}
      />
      <TextRevealed
        id={'developer_text'}
        text={t('DEVELOPER')}
      />
    </div>
  )
}
