'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from 'react-device-detect'

import HeadText from './head_text'
import HeroCanvas from '@/components/r3f/canvas/hero_canvas/HeroCanvas'
import ScrollDown from '@/components/shared/scroll_down'

import { default as imgConstants } from '@/constants/imgConstants.json'

import variables from '@/styles/variables.module.scss'
import './index.scss'

export default function HeroSlice() {
  useEffect(() => {
    console.log(innerWidth, innerHeight)
  }, [innerWidth, innerHeight])

  return (
    <section id='hero_slice'>
      {!isMobile && <HeadText />}
      <div id='hero_canvas_container'>
        <HeroCanvas />
      </div>
      {!isMobile && (
        <>
          <Image
            src={imgConstants.HERO.ARIES.SRC}
            width={imgConstants.HERO.ARIES.DIMENSIONS.WITDH}
            height={imgConstants.HERO.ARIES.DIMENSIONS.HEIGHT}
            alt='Aries'
          />
          <ScrollDown
            top={'85vh'}
            color={variables.white}
          />
        </>
      )}
    </section>
  )
}
