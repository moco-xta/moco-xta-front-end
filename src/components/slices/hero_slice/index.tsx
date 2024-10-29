import React, { useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import Parallax from '@/components/Parallax_component'

import { heroH1Animation } from 'animations/gsap/hero'

import { default as videosConstants } from '@/constants/assets/videosConstants.json'

import './index.scss'
import { gilroyBlackFont } from '@/assets/fonts/ttf'
import { sanitizedData } from '@/helpers/securityHelpers'

gsap.registerPlugin(useGSAP)

export default function HeroSlice() {
  const [splittedText] = useState<string[]>('MOCO'.split(''))

  const cursorRef = useRef<HTMLDivElement>(document.querySelector('#cursor'))
  const heroH1Ref = useRef<HTMLHeadingElement>(null!)
  const timelineRef = useRef<GSAPTimeline>(gsap.timeline())

  const enterContent = `<span>Test</span>`
  const leaveContent = `<span></span>`

  useGSAP((context, contextSafe) => {
    timelineRef.current.from(heroH1Animation.selector, heroH1Animation.params)
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
    <div
      id='hero_slice'
      className='fullscreen center_content'
      style={{ /* background: '#ff1377', */ overflow: 'hidden' }}
    >
      <h1
        ref={heroH1Ref}
        id='hero_h1'
        className={`${gilroyBlackFont.className}`}
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
