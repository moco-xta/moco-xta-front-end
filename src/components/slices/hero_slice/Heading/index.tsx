import React, { useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import {
  creativeDeveloperAnimation,
  federicoDesmoulinAnimation,
  heroH1Animation,
  heroR2024Animation,
} from 'animations/gsap/hero'

import { default as videosConstants } from '@/constants/assets/videosConstants.json'

import { sanitizedData } from '@/helpers/securityHelpers'

import './index.scss'
import {
  gilroyBlackFont,
  gilroyBoldFont,
  gilroyHeavyFont,
  gilroyRegularFont,
} from '@/assets/fonts/ttf'

gsap.registerPlugin(useGSAP)

export default function Heading() {
  const [splittedText] = useState<string[]>('MOCO'.split(''))

  const timeline = useRef<GSAPTimeline>(gsap.timeline())
  const heroH1Ref = useRef<HTMLHeadingElement>(null!)

  const enterContent = `<span>Test</span>`
  const leaveContent = `<span></span>`

  useGSAP((context, contextSafe) => {
    timeline.current.from(creativeDeveloperAnimation.selector, creativeDeveloperAnimation.params)
    timeline.current.from(heroH1Animation.selector, heroH1Animation.params)
    timeline.current.from(federicoDesmoulinAnimation.selector, federicoDesmoulinAnimation.params)
    timeline.current.from(heroR2024Animation.selector, heroR2024Animation.params)
    /* .to('.hero_h1_spans', {
        y: -500,
        // opacity: 0,
        delay: 0.1,
        duration: 0.25,
        stagger: 0.05,
        scrollTrigger: {
          trigger: 'hero_h1',
          scroller: 'body',
          start: 'top top',
          scrub: true,
        },
      }) */

    const cursor = document.querySelector('#cursor')

    // @ts-ignore
    const handleMouseEnter = contextSafe(() => {
      cursor!.innerHTML = sanitizedData(enterContent)
    })

    // @ts-ignore
    const handleMouseLeave = contextSafe(() => {
      cursor!.innerHTML = sanitizedData(leaveContent)
    })

    heroH1Ref.current.addEventListener('mouseenter', handleMouseEnter)
    heroH1Ref.current.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      heroH1Ref.current.removeEventListener('mouseenter', handleMouseEnter)
      heroH1Ref.current.removeEventListener('mouseleave', handleMouseLeave)
    }
  })

  return (
    <div id='hero_heading'>
      <h2
        id='hero_creative_developer'
        className={`${gilroyBoldFont.className}`}
      >
        &nbsp;Creative developer
      </h2>
      <h1
        ref={heroH1Ref}
        id='hero_h1'
        className={`${gilroyHeavyFont.className}`}
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
      <h2
        id='hero_federico_desmoulin'
        className={`${gilroyRegularFont.className}`}
      >
        Federico Desmoulin&nbsp;
      </h2>
      <h2
        id='hero_r2024'
        className={`${gilroyRegularFont.className}`}
      >
        ®2024&nbsp;
      </h2>
      {/* <video
        width='1920'
        height='1080'
        autoPlay
        muted
      >
        <source
          src={videosConstants.HOME.HERO.SKY_TEST}
          type='video/mp4'
        />
      </video> */}
    </div>
  )
}
