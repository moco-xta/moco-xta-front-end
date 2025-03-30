import React, { RefObject, useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTranslations } from 'next-intl'

import IntroductionTitle from './title'

import './index.scss'

type TLineRevealed = {
  text: string
}

function LineRevealed({ text }: TLineRevealed) {
  const textRef = useRef<HTMLDivElement>(null!)

  return (
    <div className='introduction_line_wrapper'>
      <p
        ref={textRef}
        className='introduction_line gradient-text'
      >
        {text}
      </p>
    </div>
  )
}

export default function IntroductionContent({
  containerRef,
}: {
  containerRef: RefObject<HTMLElement>
}) {
  const t = useTranslations('HOME.INTRODUCTION')

  useGSAP(() => {
    const animationFn = gsap.to('.introduction_line', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 60%',
        // markers: true,
      },
      yPercent: -100,
      rotateZ: '0deg',
      opacity: 1,
      duration: 1.5,
      ease: 'power1.out',
      stagger: 0.2,
    })

    const animationFn1 = gsap.to('#home_introduction_container', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 60%',
        // markers: true,
      },
      gap: '0px',
      duration: 1.5,
      ease: 'power1.out',
      stagger: 0.2,
    })

    /* const animationGradient = gsap.to('.gradient-text', {
      scrollTrigger: {
        trigger: introductionSectionRef.current,
        start: 'top 60%',
        // markers: true,
      },
      background: 'linear-gradient(to right, #000, #0000 100%)',
      duration: 1.5,
      ease: 'power1.out',
      stagger: 0.2,
    }) */

    return () => {
      animationFn.kill()
      // animationGradient.kill()
    }
  })

  return (
    <div id='introduction_content'>
      <IntroductionTitle containerRef={containerRef} />

      <div id='home_introduction_container'>
        <LineRevealed text={t('INTRODUCTION.LINE_1')} />
        <LineRevealed text={t('INTRODUCTION.LINE_2')} />
        <LineRevealed text={t('INTRODUCTION.LINE_3')} />
        <LineRevealed text={t('INTRODUCTION.LINE_4')} />
        <LineRevealed text={t('INTRODUCTION.LINE_5')} />
        {/* <LineRevealed text={t('INTRODUCTION.LINE_6')} /> */}
        <button
          id='learn_more_button'
          className='button_style_1'
        >
          Learn more
        </button>
      </div>
    </div>
  )
}
