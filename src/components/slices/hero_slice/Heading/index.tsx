import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { FaArrowDown } from 'react-icons/fa6'

import './index.scss'
import { gilroyBoldFont, gilroyHeavyFont, gilroyRegularFont } from '@/assets/fonts/ttf'

export default function Heading() {
  const timelineRef = useRef<GSAPTimeline>(gsap.timeline())

  useGSAP(() => {
    timelineRef.current
      .from('#hero_heading_creative_developer', {
        // y: '150px',
        opacity: 0,
        transform: 'translateY(100px) scaleY(0) skew(-45deg)',
        filter: 'blur(80px)',
        duration: 1,
        ease: 'power3.out',
        delay: 1,
      })
      .from(
        '#hero_heading_h1',
        {
          // y: '150px',
          opacity: 0,
          transform: 'translateY(150px) scaleY(0) skew(-45deg)',
          filter: 'blur(80px)',
          duration: 1,
          ease: 'power3.out',
        },
        '-=0.85',
      )
      .from(
        '#hero_federico_desmoulin_2024',
        {
          // y: '150px',
          opacity: 0,
          transform: 'translateY(100px)',
          duration: 1,
          ease: 'power3.out',
        },
        '-=0.4',
      )
      .from(
        '#scroll_down',
        {
          // y: '150px',
          opacity: 0,
          transform: 'translateY(100px)',
          duration: 1,
          ease: 'power3.out',
        },
        '-=0.4',
      )
  })

  return (
    <div
      id='hero_heading'
      className='center_content'
    >
      <h2
        id='hero_heading_creative_developer'
        className={`${gilroyBoldFont.className}`}
      >
        {/* &nbsp; */}Creative developer
      </h2>
      <h1
        id='hero_heading_h1'
        className={`${gilroyHeavyFont.className}`}
      >
        MOCO
      </h1>
      <h2
        id='hero_federico_desmoulin_2024'
        className={`${gilroyRegularFont.className}`}
      >
        Federico Desmoulin{/* &nbsp; */}
        <br />
        ®2024{/* &nbsp; */}
      </h2>
      <div id='scroll_down'>
        <FaArrowDown id='scroll_down_arrow' />
      </div>
    </div>
  )
}
