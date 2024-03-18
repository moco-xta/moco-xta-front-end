'use client'

import React from 'react'

import HeadText from './head_text'
import Background from './background'
import ScrollIcon from '@/components/icons/scroll'
import Role from './role'

import './index.scss'

export default function HeroSlice() {
  return (
    <section id='hero_slice'>
      <HeadText />
      <Background />
      <div id='scroll_icon_container'>
        <ScrollIcon />
      </div>
      <Role />
    </section>
  )
}
