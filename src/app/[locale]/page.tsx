'use client'

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Hero from '@/components/layout/slices/home/hero'
import Introduction from '@/components/layout/slices/home/introduction'
import LastProjects from '@/components/layout/slices/home/last_projects'
import MontmartreCanvas from '@/components/three/canvas/montmartre/MontmartreCanvas'

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
          trigger: '#montmartre_canvas',
          start: 'top 80%',
          end: 'bottom bottom',
          scrub: true,
          // markers: true,
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
        <LastProjects />
        {/* <MainSkills /> */}
        <section id='montmartre_section'>
          <MontmartreCanvas />
        </section>
        {/* <Paris18 /> */}
      </div>
    </div>
  )
}

useGLTF.preload(glbConstants.MOCO_HELIUM.C_HELIUM_BALLOON)
useGLTF.preload(glbConstants.MOCO_HELIUM.M_HELIUM_BALLOON)
useGLTF.preload(glbConstants.MOCO_HELIUM.O_HELIUM_BALLOON)
