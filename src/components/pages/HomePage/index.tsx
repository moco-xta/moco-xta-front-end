import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { LenisRef } from 'lenis/react'

import { HeroCanvas } from '@/components/three/canvas'
import { HeroSlice, IntroductionSlice } from '@/components/slices'

import './index.scss'

export default function HomePage() {
  const lenisRef = useRef<LenisRef>(null!)

  useEffect(() => {
    gsap.registerPlugin(useGSAP, ScrollTrigger)
  }, [])

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }

    gsap.ticker.add(update)

    return () => {
      gsap.ticker.remove(update)
    }
  })

  useGSAP(() => {
    gsap.from('#box_test_first_section', {
      x: 200,
      rotation: 360,
      duration: 2,
      delay: 5,
    })
    gsap.from('#box_test_second_section', {
      x: 200,
      rotation: 360,
      duration: 2,
      scrollTrigger: {
        trigger: '#introduction_slice',
        scroller: 'body',
        start: 'top 25%',
      },
    })
  })

  return (
    <div>
      <HeroCanvas />
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
