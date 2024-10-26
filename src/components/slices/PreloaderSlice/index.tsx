import React, { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import './index.scss'
import { gilroyBlackFont } from '@/assets/fonts/ttf'

gsap.registerPlugin(useGSAP)

export default function PreloaderSlice() {
  const [splittedText] = useState<string[]>('MOCO.xta'.split(''))

  const tl = gsap.timeline({
    delay: 1,
  })

  useGSAP(() => {
    tl.from('h1 span', {
      y: 150,
      opacity: 0,
      duration: 0.5,
      delay: 1,
      stagger: 0.1,
      ease: 'power4.in',
    })
      .to(
        'h1 span',
        {
          y: -150,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power4.inOut',
        },
        '+=0.75',
      )
      .to('#introduction', {
        y: '-100%',
        duration: 0.5,
      })
  })

  return (
    <section
      id='introduction'
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
