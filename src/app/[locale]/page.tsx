'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { LenisRef, useLenis } from 'lenis/react'

import Introduction from '@/components/home/slices/Introduction'
import {
  HeroSlice,
  HomeSlice,
  MainSkillsSlice,
  PerformedWithSlice,
  ReviewsSlice,
} from '@/components/slices'
import Footer from '@/components/shared/footer'
import ScrollToTop from '@/components/buttons/scroll_to_top'

import './index.scss'

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

  useLenis((e) => {
    console.log(e)
  })

  return (
    <>
      {/* <div id='home_page'> */}
      <Introduction />
      <HomeSlice />
      {/* <MainSkillsSlice />
        <PerformedWithSlice />
        <ReviewsSlice />
        <Footer />
      </div> */}
      {/* <div className='scroll_to_top_container'>
        <ScrollToTop />
      </div> */}
      {/* <Footer /> */}
    </>
  )
}
