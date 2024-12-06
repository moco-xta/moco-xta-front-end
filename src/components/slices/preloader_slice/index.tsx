import React, { useState } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { preloaderH1Animation, preloaderSliceAnimation } from 'animations/shared/preloader'

import './index.scss'
import { gilroyBlackFont } from '@/assets/fonts/ttf'

export default function PreloaderSlice() {
  const [splittedText] = useState<string[]>('HELLO!'.split(''))

  const timeline = gsap.timeline()

  useGSAP(() => {
    timeline
      .from(preloaderH1Animation.selector, preloaderH1Animation.from.params)
      .to(
        preloaderH1Animation.selector,
        preloaderH1Animation.to.params,
        preloaderH1Animation.to.offset_delay,
      )
      .to(preloaderSliceAnimation.selector, preloaderSliceAnimation.params)
  })

  return (
    <section
      id='preloader_slice'
      className='preloader_zIndex fullscreen center_content'
    >
      <h1
        id='preloader_h1'
        className={`${gilroyBlackFont.className}`}
      >
        {splittedText.map((character, index) => {
          return (
            <span
              key={`moco_letter_${index}`}
              className='preloader_h1_spans'
            >
              {character}
            </span>
          )
        })}
      </h1>
    </section>
  )
}
