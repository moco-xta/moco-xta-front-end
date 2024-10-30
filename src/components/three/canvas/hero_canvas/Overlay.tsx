import React from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { HeroSlice, IntroductionSlice } from '@/components/slices'

export default function Overlay() {
  useGSAP(() => {
    /* gsap.from('#box_test_second_section', {
      x: 200,
      rotation: 360,
      duration: 2,
      scrollTrigger: {
        trigger: '#introduction_slice',
        scroller: '#scroller_TEST',
        start: 'top 25%',
        // toggleActions: 'restart pause reverse pause'
        scrub: true,
      },
    }) */
  })

  return (
    <div id='scroller_TEST'>
      <HeroSlice />
      <IntroductionSlice />
      <div
        className='fullscreen'
        style={{ background: 'Indigo' }}
      >
        TEST
      </div>
    </div>
  )
}
