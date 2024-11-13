import React from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import './index.scss'
import { gilroyHeavyFont } from '@/assets/fonts/ttf'

export default function WhatAreMySkills() {
  useGSAP(() => {
    gsap.from('#what_are_my_skills', {
      opacity: 0,
      translateX: 200,
      transform: 'rotateX(-45deg) skew(45deg)',
      scrollTrigger: {
        trigger: '#what_are_my_skills',
        scroller: 'body',
        start: 'top 50%',
        end: 'bottom 50%',
        scrub: true,
        markers: true,
      },
    })
  })

  return (
    <h1
      id='what_are_my_skills'
      className={`${gilroyHeavyFont.className}`}
    >
      <span id='what'>What</span>
      <br />
      are my
      <br />
      skills?
    </h1>
  )
}
