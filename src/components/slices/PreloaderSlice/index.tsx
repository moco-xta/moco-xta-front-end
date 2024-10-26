import React, { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { preloaderSliceAnimation, preloaderTextAnimation } from 'animations/preloader'

import './index.scss'
import { gilroyBlackFont } from '@/assets/fonts/ttf'

gsap.registerPlugin(useGSAP)

export default function PreloaderSlice() {
  const [splittedText] = useState<string[]>('MOCO.xta'.split(''))

  const tl = gsap.timeline({
    delay: 1,
  })

  useGSAP(() => {
    tl.from(preloaderTextAnimation.selector, preloaderTextAnimation.from.params)
      .to(
        preloaderTextAnimation.selector,
        preloaderTextAnimation.to.params,
        preloaderTextAnimation.to.offset_delay,
      )
      .to(preloaderSliceAnimation.selector, preloaderSliceAnimation.params)
  })

  return (
    <section
      id='preloader_slice'
      className='preloader_zIndex fullscreen'
    >
      <h1
        id='h1_moco'
        className={`${gilroyBlackFont.className}`}
      >
        {splittedText.map((letter, index) => {
          return <span key={`moco_letter_${index}`}>{letter}</span>
        })}
      </h1>
    </section>
  )
}
