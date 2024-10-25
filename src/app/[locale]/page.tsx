'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { LenisRef, useLenis } from 'lenis/react'

import { HomePage } from '@/components/pages'
import { IntroductionSlice } from '@/components/slices'

export default function Home() {
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

  /* useLenis((e) => {
    console.log(e)
  }) */

  return (
    <>
      <IntroductionSlice />
      <HomePage />
    </>
  )
}
