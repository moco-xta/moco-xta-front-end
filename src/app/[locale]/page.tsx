'use client'

import React from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import HomePage from '@/components/slices/home'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Home() {
  return <HomePage />
}
