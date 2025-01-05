'use client'

import React from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { Page } from '@/components/layout/pages'

import { default as resourcesConstants } from '@/constants/resources/resourcesConstants.json'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Resources() {
  return <Page pageData={resourcesConstants} />
}
