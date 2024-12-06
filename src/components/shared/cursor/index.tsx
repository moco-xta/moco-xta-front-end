'use client'

import React from 'react'
import { useSelector } from 'react-redux'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { RootState } from '@/redux/store'

import './index.scss'
import { cursorAnimation } from 'animations'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Cursor() {
  const state = useSelector((state: RootState) => state.cursorState.state)

  useGSAP(
    (_, contextSafe) => {
      // @ts-ignore
      const handleMouseMove = contextSafe((e: MouseEvent) => {
        if (state === 'default') {
          gsap.to(cursorAnimation.selector, {
            x: e.pageX,
            y: e.pageY,
            duration: cursorAnimation.params.duration,
            ease: cursorAnimation.params.ease,
          })
        }
      })

      window.addEventListener('mousemove', handleMouseMove)

      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
      }
    },
    { scope: cursorAnimation.scope },
  )

  return (
    <div
      id='cursor'
      className='cursor_zIndex hue_rotate'
    />
  )
}
