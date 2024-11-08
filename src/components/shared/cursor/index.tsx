'use client'

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { AppDispatch, RootState } from '@/redux/store'

import { default as cursorAnimationsConstants } from '@/constants/animations/cursorAnimationsConstants.json'

import './index.scss'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Cursor() {
  const dispatch = useDispatch<AppDispatch>()

  const state = useSelector((state: RootState) => state.cursorState.state)

  useGSAP((_, contextSafe) => {
    gsap.from(cursorAnimationsConstants.SELECTOR, {
      opacity: 0,
      duration: 3,
    })

    // @ts-ignore
    const handleMouseMove = contextSafe((e: MouseEvent) => {
      if (state === 'default') {
        gsap.to(cursorAnimationsConstants.SELECTOR, {
          x: e.pageX,
          y: e.pageY,
          duration: cursorAnimationsConstants.DEFAULT.DURATION,
          ease: cursorAnimationsConstants.DEFAULT.EASE,
        })
      }
    })

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  })

  return (
    <div
      id='cursor'
      className='cursor_zIndex hue_rotate'
      // style={{ left: position.x, top: position.y }}
    />
  )
}
