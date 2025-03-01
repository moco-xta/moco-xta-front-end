'use client'

import React from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import Hero from '@/components/layout/slices/hero'

import './index.scss'

gsap.registerPlugin(useGSAP)

export default function Page() {
  return <Hero />
}
