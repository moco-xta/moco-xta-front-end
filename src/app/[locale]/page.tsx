'use client'

import React from 'react'
import { useGLTF } from '@react-three/drei'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import Hero from '@/components/layout/slices/hero'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

import './index.scss'

gsap.registerPlugin(useGSAP)

export default function Home() {
  return <Hero />
}

useGLTF.preload(glbConstants.MOCO_HELIUM.C_HELIUM_BALLOON)
useGLTF.preload(glbConstants.MOCO_HELIUM.M_HELIUM_BALLOON)
useGLTF.preload(glbConstants.MOCO_HELIUM.O_HELIUM_BALLOON)
