'use client'

import React from 'react'

import HeadText from './head_text'
import Background from './background'
import Role from './role'
import ScrollDown from '@/components/shared/scroll_down'

import './index.scss'

export default function HeroSlice() {
  return (
    <section id='hero_slice'>
      <HeadText />
      <Background />
      <Role />
      <ScrollDown />
    </section>
  )
}
