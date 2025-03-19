import React, { RefObject, useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTranslations } from 'next-intl'

import './index.scss'
import { helveticaMediumFont } from '@/app/fonts'

export type TIntroductionContent = {
  introductionSectionRef: RefObject<HTMLElement>
}

export type TTextRevealed = {
  id: string
  text: string
}

export type TLineRevealed = {
  text: string
}

function TextRevealed({ id, text }: TTextRevealed) {
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

function LineRevealed({ text }: TLineRevealed) {
  return (
    <div className='introduction_line_wrapper'>
      <p className='introduction_line gradient-text'>{text}</p>
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

    const animationFn = gsap.to('.introduction_line', {
      scrollTrigger: {
        trigger: introductionSectionRef.current,
        start: 'top center',
        markers: true,
      },
      yPercent: -100,
      rotateZ: '-15deg',
      duration: 2.5,
      ease: 'power1.out',
      stagger: 0.2,
    })
    return () => animationFn.kill()
  })

  return (
    <div id='introduction_content'>
      <div className={`${helveticaMediumFont.className}`}>
        <TextRevealed
          id={'hi_text'}
          text={t('TITLE.HI')}
        />
        <TextRevealed
          id={'im_text'}
          text={t('TITLE.I_M')}
        />
        <TextRevealed
          id={'federico_text'}
          text={'Federico'}
        />
        <br />
        <TextRevealed
          id={'a_text'}
          text={t('TITLE.A')}
        />
        <TextRevealed
          id={'front_end_text'}
          text={t('TITLE.FRONT_END')}
        />
        <TextRevealed
          id={'developer_text'}
          text={t('TITLE.DEVELOPER')}
        />
      </div>

      <div>
        <LineRevealed text={t('INTRODUCTION.LINE_1')} />
        <LineRevealed text={t('INTRODUCTION.LINE_2')} />
        <LineRevealed text={t('INTRODUCTION.LINE_3')} />
        <LineRevealed text={t('INTRODUCTION.LINE_4')} />
        <LineRevealed text={t('INTRODUCTION.LINE_5')} />
        <LineRevealed text={t('INTRODUCTION.LINE_6')} />
      </div>
    </div>
  )
}
