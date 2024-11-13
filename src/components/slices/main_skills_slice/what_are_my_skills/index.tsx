import React from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import './index.scss'
import { gilroyHeavyFont } from '@/assets/fonts/ttf'

export default function WhatAreMySkills() {
  useGSAP(() => {
    gsap.from('.what_are_my_skills_text_blocks', {
      opacity: 0,
      translateX: 75,
      transform: 'scaleY(0.6) skew(30deg)',
      stagger: 0.2,
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
      <div
        id='what'
        className='what_are_my_skills_text_blocks'
      >
        What
      </div>
      <div
        id='are_my'
        className='what_are_my_skills_text_blocks'
      >
        are my
      </div>
      <div
        id='skills'
        className='what_are_my_skills_text_blocks'
      >
        skills?
      </div>
    </h1>
  )
}
