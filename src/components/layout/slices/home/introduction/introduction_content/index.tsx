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
        className='section_title introduction_title_blocks'
      >
        {text}
        &nbsp;
      </span>
    </div>
  )
}

function LineRevealed({ text }: TLineRevealed) {
  const textRef = useRef<HTMLDivElement>(null!)

  /* useGSAP(() => {
    const animationValues = {
      colorAlpha: 0,
      stopPos: 0
    };

    // Corrected GSAP animation with proper arguments
    const animation = gsap.to(animationValues, {
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 60%',
        // markers: true,
      },
      colorAlpha: 1,      // Final alpha value (0 → 1)
      stopPos: 100,       // Final position (0% → 100%)
      duration: 3,
      ease: 'power2.inOut',
      onUpdate: () => {
        if (!textRef.current) return;
        textRef.current.style.background = 
          `linear-gradient(to right, 
           #000, 
           rgba(0, 0, 0, ${animationValues.colorAlpha}) ${animationValues.stopPos}%)`;
      },
      onStart: () => {
        if (!textRef.current) return;
        textRef.current.style.background = 
          "linear-gradient(to right, #000, rgba(0, 0, 0, 0) 0%)";
        textRef.current.style.backgroundClip = 'text'
      }
    });

    return () => {
      animation.kill()
      // animationGradient.kill()
    }
  }) */

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

export default function IntroductionContent({ introductionSectionRef }: TIntroductionContent) {
  const t = useTranslations('HOME.INTRODUCTION')

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: introductionSectionRef.current,
        start: 'top 60%',
        // markers: true,
      },
    })

    tl.to('#hi_text', {
      yPercent: -100,
      opacity: 1,
      duration: 0.5,
      ease: 'power1.out',
    })
      .to(
        '#im_text',
        {
          xPercent: 100,
          opacity: 1,
          duration: 0.5,
          ease: 'power1.out',
        },
        '-=0.25',
      )
      .to(
        '#federico_text',
        {
          xPercent: 100,
          opacity: 1,
          duration: 0.5,
          ease: 'power1.out',
        },
        '-=0.25',
      )
      .to(
        '#introduction_title_first_line',
        {
          gap: '75px',
          duration: 0.5,
          ease: 'power1.out',
        },
        '-=0.25',
      )
      .to(
        '#a_text',
        {
          yPercent: 100,
          opacity: 1,
          duration: 0.5,
          ease: 'power1.out',
        },
        '-=0.75',
      )
      .to(
        '#front_end_text',
        {
          yPercent: 100,
          opacity: 1,
          duration: 0.5,
          ease: 'power1.out',
        },
        '-=0.25',
      )
      .to(
        '#developer_text',
        {
          yPercent: 100,
          opacity: 1,
          duration: 0.5,
          ease: 'power1.out',
        },
        '-=0.25',
      )

    const animationFn = gsap.to('.introduction_line', {
      scrollTrigger: {
        trigger: introductionSectionRef.current,
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
        trigger: introductionSectionRef.current,
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
      <div id='introduction_title' /* className={`${helveticaMediumFont.className}`} */>
        <div
          id='introduction_title_first_line'
          className='introduction_title_lines'
        >
          <TextRevealed
            id='hi_text'
            text={t('SECTION_TITLE.HI')}
          />
          <div>
            <TextRevealed
              id='im_text'
              text={t('SECTION_TITLE.I_M')}
            />
            <TextRevealed
              id='federico_text'
              text={'Federico'}
            />
          </div>
        </div>
        <div
          id='introduction_title_second_line'
          className='introduction_title_lines'
        >
          <TextRevealed
            id='a_text'
            text={t('SECTION_TITLE.A')}
          />
          <TextRevealed
            id='front_end_text'
            text={t('SECTION_TITLE.FRONT_END')}
          />
          <TextRevealed
            id='developer_text'
            text={t('SECTION_TITLE.DEVELOPER')}
          />
        </div>
      </div>

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
