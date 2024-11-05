'use client'

import React from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { HomePage } from '@/components/pages'
import { PreloaderSlice } from '@/components/slices'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Home() {
  return (
    <>
      {/* <PreloaderSlice />
      <HomePage /> */}
    </>
  )
}
