'use client'

import React from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { default as cursorAnimationsConstants } from '@/constants/animations/cursorAnimationsConstants.json'

import './index.scss'

gsap.registerPlugin(useGSAP)

export default function Cursor() {
  useGSAP((context, contextSafe) => {
    gsap.from(cursorAnimationsConstants.SELECTOR, {
      opacity: 0,
      duration: 3,
    })

    // @ts-ignore
    const handleMouseMove = contextSafe((e: MouseEvent) => {
      gsap.to(cursorAnimationsConstants.SELECTOR, {
        x: e.x,
        y: e.y,
        duration: cursorAnimationsConstants.DEFAULT.DURATION,
        ease: cursorAnimationsConstants.DEFAULT.EASE,
      })
    })

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  })

  return (
    <div
      id='cursor'
      className='cursor_zIndex'
    ></div>
  )
}
