import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import './index.scss'
import { gilroyHeavyFont } from '@/assets/fonts/ttf'

export default function HeroSlice() {
  const [creativeText] = useState<string[]>('creative'.toUpperCase().split(''))

  const timelineRef = useRef<GSAPTimeline>(gsap.timeline())
  const creativeH2Ref = useRef<HTMLHeadingElement>(null!)

  /* useEffect(() => {
    console.log('creativeH2Ref.current', creativeH2Ref.current)
    console.log(document.getElementsByClassName('creative_spans'))
  }, [document, creativeH2Ref]) */

  useGSAP(() => {
    /* timelineRef.current.from(creativeH2Ref.current, {
      y: 700,
      duration: 2,
      stagger: 1,
    }) */
    /* timelineRef.current
      .from('.creative_spans', {
        translateY: 700,
        opacity: 0,
        filter: 'blur(40px)',
        duration: 0.5,
        stagger: 0.2,
      })
      .to(
        creativeH2Ref.current,
        {
          translateX: -700,
          duration: 1.5,
        },
        0,
      ) */
  })

  return (
    <section
      id='hero_slice'
      className={`fullscreen ${gilroyHeavyFont.className}`}
    >
      <h2
        ref={creativeH2Ref}
        id='creative_h2'
      >
        {creativeText.map((letter, index) => {
          return (
            <span
              key={`creative_letter_${letter}_${index}`}
              className='creative_spans'
            >
              {letter}
            </span>
          )
        })}
      </h2>
    </section>
  )
}
