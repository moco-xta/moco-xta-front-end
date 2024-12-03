import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { heroTimeline } from '@/data/animations/timelines/heroTimeline'

import GreetingCanvas from '@/components/three/canvas/home_canvas/hero/gretting_canvas/GreetingCanvas'
import AkaMocoCanvas from '@/components/three/canvas/home_canvas/hero/aka_moco_canvas/AkaMocoCanvas'
import FrontEndDevelopperWithExtraSkillsCanvas from '@/components/three/canvas/home_canvas/hero/front_end_developper_with_extra_skills_canvas/FrontEndDevelopperWithExtraSkillsCanvas'

import { getDelay } from '@/helpers/animationHelpers'

import { default as heroAnimationsConstants } from '@/constants/animations/home/heroAnimationsConstants.json'

export default function HeroSlice() {
  const heroTimelineRef = useRef<GSAPTimeline>(
    gsap.timeline({
      delay: heroAnimationsConstants.DELAY / heroAnimationsConstants.SPEED,
    }),
  )
  const akaMocoSliceRef = useRef<HTMLElement>(null!)

  useEffect(() => {
    console.log('akaMocoSliceRef', akaMocoSliceRef)
  }, [akaMocoSliceRef])

  /* useGSAP(
    () => {
      heroTimelineRef.current.to(akaMocoSliceRef.current.style, {
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
      })
    },
    // { scope: akaMocoSliceRef },
  ) */

  return (
    <>
      <section
        id='greeting_slice'
        className='fullscreen'
        style={{ zIndex: heroAnimationsConstants.Z_INDEXES.GREETING_SLICE, position: 'fixed' }}
      >
        <GreetingCanvas timeline={heroTimelineRef.current} />
      </section>
      {/* <section
        ref={akaMocoSliceRef}
        id='aka_moco_slice'
        className='fullscreen'
        style={{ zIndex: heroAnimationsConstants.Z_INDEXES.AKA_MOCO_SLICE, position: 'fixed', opacity: 0 }}
      >
        <AkaMocoCanvas />
      </section> */}
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
