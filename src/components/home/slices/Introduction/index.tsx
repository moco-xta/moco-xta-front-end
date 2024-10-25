import React, { useEffect, useState } from 'react'
import localFont from 'next/font/local'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import './index.scss'
import { gilroyBlackFont } from '@/assets/fonts/ttf'

export default function Introduction() {
  const [splittedText] = useState<string[]>('MOCO.xta'.split(''))

  useEffect(() => {
    gsap.registerPlugin(useGSAP)
  }, [])

  const tl = gsap.timeline({
    delay: 1,
  })

  useGSAP(() => {
    /* gsap.from('h1', {
      y: 100,
      duration: 1,
      delay: 1,
      stagger: 0.2
    }) */
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
          /* delay: 3, */
          stagger: 0.1,
          ease: 'power4.inOut',
        },
        /* '+=0.5' */
      )
      .to(
        '#introduction',
        {
          y: '-100%',
          /* opacity: 0, */
          duration: 0.5,
        },
        /* '+=0.2' */
      )
  })

  return (
    <section id='introduction'>
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
