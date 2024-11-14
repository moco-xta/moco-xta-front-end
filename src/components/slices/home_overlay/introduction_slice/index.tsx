import React, { useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTranslations } from 'next-intl'

import Parallax from '@/components/parallax'
import InternalLinkButton from '@/components/buttons/internal_link_button'

import './index.scss'

import { introductionTextAnimation } from 'animations/gsap/introduction'

export default function IntroductionSlice() {
  const t = useTranslations('HOME.INTRODUCTION')

  const [splittedIntroduction] = useState<string[]>(t('INTRODUCTION').split(''))

  const wrapperRef = useRef<HTMLParagraphElement>(null!)

  const timeline = gsap.timeline({
    delay: 1,
  })

  useGSAP(() => {
    timeline.from(introductionTextAnimation.selector, introductionTextAnimation.params)
  })

  return (
    <Parallax
      id='introduction_slice_parallax'
      speed={-4}
      style={{
        alignSelf: 'flex-start',
      }}
    >
      <section
        id='introduction_slice'
        className='fullscreen center_content blured_background'
      >
        <p
          ref={wrapperRef}
          id='introduction_text'
        >
          <span id='who_i_am'>{t('WHO_I_AM')}</span>
          {splittedIntroduction.map((letter, index) => {
            return (
              <span
                key={`introduction_letter_${index}`}
                className='introduction_letter_span'
              >
                {letter}
              </span>
            )
          })}
        </p>
        <div id='about_link_container'>
          <InternalLinkButton
            path={'/about'}
            text={t('MORE_ABOUT_ME')}
          />
        </div>
      </section>
    </Parallax>
  )
}
