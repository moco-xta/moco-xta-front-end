'use client'

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Hero from '@/components/layout/slices/hero'
import Introduction from '@/components/layout/slices/introduction'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

import './index.scss'

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null!)

  useGSAP(
    () => {
      const animationFn = gsap.to('#home_page', {
        scrollTrigger: {
          trigger: '#introduction_section',
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
          markers: true,
        },
        background: '#0f1114',
        ease: 'power1.in',
      })
      return () => animationFn.kill()
    },
    { scope: containerRef },
  )

  return (
    <div ref={containerRef}>
      <div id='home_page'>
        <Hero />
        <Introduction />
      </div>
    </div>
  )
}

useGLTF.preload(glbConstants.MOCO_HELIUM.C_HELIUM_BALLOON)
useGLTF.preload(glbConstants.MOCO_HELIUM.M_HELIUM_BALLOON)
useGLTF.preload(glbConstants.MOCO_HELIUM.O_HELIUM_BALLOON)
