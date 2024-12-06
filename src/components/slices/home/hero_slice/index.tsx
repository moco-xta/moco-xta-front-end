import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { heroTimeline } from '@/data/animations/timelines/heroTimeline'

import GreetingCanvas from '@/components/three/canvas/home_canvas/hero/gretting_canvas/GreetingCanvas'
import AkaMocoCanvas from '@/components/three/canvas/home_canvas/hero/aka_moco_canvas/AkaMocoCanvas'
import FrontEndDevelopperWithExtraSkillsCanvas from '@/components/three/canvas/home_canvas/hero/front_end_developper_with_extra_skills_canvas/FrontEndDevelopperWithExtraSkillsCanvas'

import { default as heroAnimationsConstants } from '@/constants/animations/home/heroAnimationsConstants.json'

import './index.scss'

export default function HeroSlice() {
  const [greetingSliceDuration] = useState<number>(
    heroAnimationsConstants.BLOCKS.GREETING_SLICE.DURATION / heroAnimationsConstants.SPEED,
  )
  const [greetingSliceDelay] = useState<number>(
    heroAnimationsConstants.BLOCKS.GREETING_SLICE.KEYFRAME_START / heroAnimationsConstants.SPEED,
  )

  const timelineRef = useRef<GSAPTimeline>(
    gsap.timeline({
      delay: heroAnimationsConstants.DELAY / heroAnimationsConstants.SPEED,
    }),
  )
  const grettingSliceRef = useRef<HTMLElement>(null!)
  const mocoSliceRef = useRef<HTMLElement>(null!)

  useGSAP(
    () => {
      timelineRef.current.to(
        grettingSliceRef.current.style,
        {
          keyframes: {
            '0%': {
              background: 'white',
            },
            '40%': {
              background: 'white',
              // onComplete: () => heroDivRef.current.style.background = 'red'
            },
            '41%': {
              background: 'black',
            },
            easeEach: 'none',
          },
          duration: greetingSliceDuration,
        },
        greetingSliceDelay,
      )
      timelineRef.current.to(
        mocoSliceRef.current.style,
        {
          keyframes: {
            '0%': {
              // onComplete: () => mocoSliceRef.current.style.visibility = 'visible'
              // display: 'none',
              opacity: 0,
              // background: 'red'
            },
            '100%': {
              // onComplete: () => mocoSliceRef.current.style.visibility = 'hidden'
              // display: 'none',
              opacity: 1,
              // background: 'red'
            },
            easeEach: 'none',
          },
          duration: 10,
        },
        0,
      )
      /* timelineRef.current.to(
        grettingSliceRef.current.style,
        {
          keyframes: {
            '0%': {
              background: '#fff',
            },
            '5%': {
              backgroundImage: 'url("/img/test/brain.jpg")',
            },
            '10%': {
              backgroundImage: 'url("/img/test/nuclear_explosion.jpg")',
            },
            '15%': {
              backgroundImage: 'url("/img/test/guernica.jpg")',
            },
            '20%': {
              backgroundImage: 'url("/img/test/brain.jpg")',
            },
            '25%': {
              backgroundImage: 'url("/img/test/nuclear_explosion.jpg")',
              // backgroundImage: 'unset',
              // background: '#f00',
            },
            '30%': {
              backgroundImage: 'url("/img/test/guernica.jpg")',
            },
            '35%': {
              backgroundImage: 'url("/img/test/brain.jpg")',
            },
            '40%': {
              backgroundImage: 'url("/img/test/nuclear_explosion.jpg")',
            },
            '45%': {
              backgroundImage: 'url("/img/test/guernica.jpg")',
              // backgroundImage: 'unset',
              // background: '#f00',
            },
            '50%': {
              backgroundImage: 'url("/img/test/brain.jpg")',
            },
            '55%': {
              backgroundImage: 'url("/img/test/nuclear_explosion.jpg")',
            },
            '60%': {
              backgroundImage: 'url("/img/test/guernica.jpg")',
            },
            '65%': {
              backgroundImage: 'url("/img/test/brain.jpg")',
            },
            '70%': {
              backgroundImage: 'url("/img/test/nuclear_explosion.jpg")',
            },
            '75%': {
              backgroundImage: 'url("/img/test/guernica.jpg")',
              // backgroundImage: 'unset',
              // background: '#f00',
            },
            '80%': {
              backgroundImage: 'url("/img/test/guernica.jpg")',
              // backgroundImage: 'unset',
              // background: '#00f',
            },
            '85%': {
              backgroundImage: 'url("/img/test/nuclear_explosion.jpg")',
            },
            easeEach: 'none',
          },
          duration: 10 / heroAnimationsConstants.SPEED,
        },
        0,
      ) */
      /* heroTimelineRef.current.to(akaMocoSliceRef.current.style, {
        keyframes: {
          '0%': {
            // display: 'none',
            opacity: 0,
            // background: 'red'
          },
          '1%': {
            // display: 'none',
            opacity: 1,
            // background: 'red'
          },
          easeEach: 'none',
        },
        delay:
          (heroAnimationsConstants.DELAY + getDelay('AKA_MOCO', heroTimeline)) /
          heroAnimationsConstants.SPEED,
        duration: 1 / heroAnimationsConstants.SPEED,
      }) */
    },
    { scope: mocoSliceRef },
  )

  return (
    <>
      <section
        ref={grettingSliceRef}
        id='greeting_slice'
        className='fullscreen'
        style={{
          zIndex: heroAnimationsConstants.Z_INDEXES.GREETING_SLICE,
          position: 'fixed',
          // backgroundImage: 'url("/img/test/guernica.jpg")',
        }}
      >
        <GreetingCanvas timeline={timelineRef.current} />
      </section>
      <section
        ref={mocoSliceRef}
        id='aka_moco_slice'
        className='fullscreen'
        style={{
          zIndex: heroAnimationsConstants.Z_INDEXES.AKA_MOCO_SLICE,
          position: 'fixed',
          opacity: 0,
        }}
      >
        <AkaMocoCanvas />
      </section>
      {/* <section
        id='front_end_developper_with_extra_skills_canvas'
        className='fullscreen'
        style={{ zIndex: heroAnimationsConstants.Z_INDEXES.FRONT_END_DEVELOPPER_WITH_EXTRA_SLICE, position: 'fixed' }}
      >
        <FrontEndDevelopperWithExtraSkillsCanvas />
      </section> */}
    </>
  )
}
