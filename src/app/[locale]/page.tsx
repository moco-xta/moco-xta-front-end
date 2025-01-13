'use client'

import React from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { HomePage } from '@/components/layout/pages'

import './index.scss'

gsap.registerPlugin(useGSAP)

export default function Page() {
  return <HomePage />
}
