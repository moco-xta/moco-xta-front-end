import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { FaArrowDown } from 'react-icons/fa6'

import './index.scss'
import { gilroyBoldFont, gilroyHeavyFont, gilroyRegularFont } from '@/assets/fonts/ttf'

import {
  creativeDeveloperAnimation,
  federicoDesmoulin2024Animation,
  mocoAnimation,
  scrollDownAnimation,
  sunAnimation,
} from 'animations/gsap/hero'

export default function Heading() {
  const timelineRef = useRef<GSAPTimeline>(gsap.timeline())

  useGSAP(() => {
    timelineRef.current
      .from(creativeDeveloperAnimation.selector, creativeDeveloperAnimation.params)
      .from(mocoAnimation.selector, mocoAnimation.params, mocoAnimation.position_parameter)
      .from(
        federicoDesmoulin2024Animation.selector,
        federicoDesmoulin2024Animation.params,
        federicoDesmoulin2024Animation.position_parameter,
      )
      .from(
        scrollDownAnimation.selector,
        scrollDownAnimation.params,
        scrollDownAnimation.position_parameter,
      )
      .from(sunAnimation.selector, sunAnimation.from.params, sunAnimation.from.position_parameter)
  })

  return (
    <div
      id='hero_heading'
      className='center_content'
    >
      <h2
        id='creative_developer'
        className={`${gilroyBoldFont.className}`}
      >
        Creative developer
      </h2>
      <h1
        id='moco'
        className={`${gilroyHeavyFont.className}`}
      >
        MOCO
      </h1>
      <h2
        id='federico_desmoulin_2024'
        className={`${gilroyRegularFont.className}`}
      >
        Federico Desmoulin
        <br />
        ®2024
      </h2>
      <div id='scroll_down'>
        <FaArrowDown id='scroll_down_arrow' />
      </div>
    </div>
  )
}
