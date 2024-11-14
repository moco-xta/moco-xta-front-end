import React from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import './index.scss'
import { gilroyHeavyFont } from '@/assets/fonts/ttf'

import { whatAreMySkillsAnimation } from 'animations/gsap/main_skills'

export default function WhatAreMySkills() {
  useGSAP(() => {
    gsap.from(whatAreMySkillsAnimation.selector, whatAreMySkillsAnimation.params)
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
