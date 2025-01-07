'use client'

import React from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { Page } from '@/components/layout/pages'

import { default as skillsConstants } from '@/constants/skills/skillsConstants.json'
import RubiksCubeCanvas from '@/components/three/canvas/rubiks_cube/RubiksCubeCanvas'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Skills() {
  return (
    <Page
      pageData={skillsConstants}
      backgroundCanvas={<RubiksCubeCanvas />}
    />
  )
}
