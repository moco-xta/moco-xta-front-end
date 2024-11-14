'use client'

import React from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// import { PreloaderSlice } from '@/components/slices'
import HomeOverlay from '@/components/slices/home_overlay'
import SunSlice from '@/components/slices/home_overlay/sun_slice'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Home() {
  return (
    <div>
      {/* <PreloaderSlice /> */}
      <SunSlice />
      <HomeOverlay />
    </div>
  )
}
