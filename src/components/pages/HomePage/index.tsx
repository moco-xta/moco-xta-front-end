import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { LenisRef, useLenis } from 'lenis/react'

import { HeroSlice, IntroductionSlice } from '@/components/slices'

import './index.scss'

export default function HomePage() {
  const lenisRef = useRef<LenisRef>(null!)

  /* const tl = gsap.timeline() */

  useEffect(() => {
    gsap.registerPlugin(useGSAP, ScrollTrigger)
  }, [])

  useEffect(() => {
    /* gsap.registerPlugin(useGSAP, ScrollTrigger) */

    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }

    gsap.ticker.add(update)

    return () => {
      gsap.ticker.remove(update)
    }
  })

  /* useLenis((e) => {
    console.log(e)
  }) */

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
        start: 'top 25%',
      },
    })
  })

  return (
    <div>
      <HeroSlice />
      <IntroductionSlice />
    </div>
  )
}
