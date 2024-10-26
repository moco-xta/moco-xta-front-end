import React, { useState } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import Parallax from '@/components/Parallax'

import { heroH1Animation } from 'animations/gsap/hero'

import './index.scss'
import { gilroyBlackFont } from '@/assets/fonts/ttf'

gsap.registerPlugin(useGSAP)

export default function HeroSlice() {
  const [splittedText] = useState<string[]>('MOCO'.split(''))

  useGSAP(() => {
    gsap.from(heroH1Animation.selector, heroH1Animation.params)
  })

  return (
    <Parallax
      id='hero_slice_parallax_wrapper'
      speed={0}
      style={{
        alignSelf: 'flex-end',
        overflow: 'hidden',
      }}
    >
      <section
        id='hero_slice'
        className='fullscreen center_content'
      >
        <h1
          id='hero_h1'
          className={`${gilroyBlackFont.className}`}
        >
          {splittedText.map((letter, index) => {
            return (
              <span
                key={`moco_letter_${index}`}
                className='hero_h1_spans'
              >
                {letter}
              </span>
            )
          })}
        </h1>
      </section>
    </Parallax>
  )
}
