'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import SkillsIntroduction from '@/components/layout/slices/skills/skills_introduction'
import SkillsSlice from '@/components/layout/slices/skills/skills'

import './index.scss'

export default function Skills() {
  const skillsPageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!skillsPageRef.current) return

    gsap.registerPlugin(ScrollTrigger) // ✅ Move inside useEffect

    // Get all sections
    const sections = gsap.utils.toArray<HTMLElement>(
      skillsPageRef.current.querySelectorAll('.skills_section'),
    )

    if (!sections.length) return // ✅ Ensure sections exist before running ScrollTrigger

    ScrollTrigger.create({
      trigger: skillsPageRef.current,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1, // Smooth scrolling effect
      snap: {
        snapTo: (progress) => Math.round(progress * (sections.length - 1)) / (sections.length - 1),
        duration: { min: 0.3, max: 1 },
        ease: 'power2.inOut',
      },
      invalidateOnRefresh: true, // ✅ Fix layout shifts on resize
      markers: true, // Debugging (Remove in production)
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill()) // ✅ Clean up triggers
    }
  }, [])

  return (
    <div
      ref={skillsPageRef}
      id='skills_page'
    >
      <SkillsIntroduction />
      <SkillsSlice />
    </div>
  )
}
