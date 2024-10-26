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
    <div
      id='hero_slice'
      className='fullscreen center_content'
      style={{ /* background: '#ff1377', */ overflow: 'hidden' }}
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
    </div>
  )
}
