import React, { useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useLenis } from 'lenis/react'
import { FaArrowRight } from 'react-icons/fa'

import {
  HeroSlice,
  IntroductionSlice,
  MainSkillsSlice,
  MindBendingScrollAnimation,
} from '@/components/slices'

import './index.scss'
import { gilroyBlackFont } from '@/assets/fonts/ttf'
import CylenderWorkShowcase from '@/components/slices/cylender_work_showcase'

const Block = () => {
  return (
    <div className='marque'>
      <h1 className={`${gilroyBlackFont.className}`}>THRIVE BEYOND LIMITS</h1>
      <FaArrowRight
        className='arrow_right'
        size={'3vw'}
      />
    </div>
  )
}

export default function HomeOverlay() {
  const [verticalFlow, setVerticalFlow] = useState<'up' | 'down'>('down')

  const sectionRef = useRef<HTMLElement>(null!)
  const wrapperRef = useRef<HTMLDivElement>(null!)

  useGSAP(() => {
    if (verticalFlow === 'up') {
      gsap.to('.marque', {
        transform: 'translateX(-200%)',
        delay: 1,
        duration: 2,
        repeat: -0.5,
        ease: 'none',
      })
      gsap.to('.arrow_right', {
        rotate: 180,
        duration: 0.5,
        ease: 'none',
      })
    } else {
      gsap.to('.marque', {
        transform: 'translateX(0%)',
        delay: 0.5,
        duration: 2,
        repeat: -1,
        ease: 'none',
      })
      gsap.to('.arrow_right', {
        rotate: 0,
        duration: 0.5,
        ease: 'none',
      })
    }
  }, [{ dependency: [verticalFlow], scope: wrapperRef }])

  useLenis((lenis) => {
    if (lenis.direction === 1) {
      setVerticalFlow('down')
    } else if (lenis.direction === -1) {
      setVerticalFlow('up')
    }
  })

  return (
    <>
      <HeroSlice />
      {/* <MindBendingScrollAnimation /> */}
      <IntroductionSlice />
      <MainSkillsSlice />
      {/* <CylenderWorkShowcase />
      <section
        ref={sectionRef}
        className='fullscreen center_content'
        style={{ background: 'Indigo' }}
      >
        <div
          ref={wrapperRef}
          id='move'
        >
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
        </div>
      </section> */}
    </>
  )
}
