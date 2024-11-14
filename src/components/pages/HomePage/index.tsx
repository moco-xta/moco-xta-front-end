import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { LenisRef } from 'lenis/react'

import { HeroCanvas } from '@/components/three/canvas'
import HomeOverlay from './HomeOverlay'

import './index.scss'
import ScrollToTop from '@/components/buttons/scroll_to_top'

export default function HomePage() {
  const lenisRef = useRef<LenisRef>(null!)

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
    gsap.from('#box_test_second_section', {
      x: 200,
      rotation: 360,
      duration: 2,
      scrollTrigger: {
        trigger: '#introduction_slice',
        scroller: 'body',
        start: 'top 25%',
        /* toggleActions: 'restart pause reverse pause' */
        scrub: true,
      },
    })
  })

  return (
    <>
      <HeroCanvas />
      <HomeOverlay />
      <ScrollToTop />
    </>
  )
}
