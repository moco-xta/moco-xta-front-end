'use client'

import React from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// import { PreloaderSlice } from '@/components/slices'
import HomeOverlay from '@/components/slices/home_overlay'
import SunSlice from '@/components/slices/home_overlay/sun_slice'
import { HeroCanvas } from '@/components/three/canvas'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Home() {
  return (
    <div>
      {/* <PreloaderSlice /> */}
      {/* <SunSlice /> */}
      <HeroCanvas />
      {/* <HomeOverlay /> */}
    </div>
  )
}
