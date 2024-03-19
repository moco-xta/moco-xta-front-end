'use client'

import React, { useEffect, useRef, useState } from 'react'

import { RevealComponentInterface } from '@/interfaces/revealComponentInterface'

import './index.scss'

export default function RevealTextBlock({
  children,
  threshold,
  duration,
  delay = '0',
  x = 0,
  y = 0,
}: RevealComponentInterface) {
  y = y || 0
  const ref = useRef(null)
  const [intersecting, setIntersecting] = useState(false)
  /* const [revealed, setRevealed] = useState(false) */

  useEffect(() => {
    if (ref.current) {
      const intersectionObserver = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setIntersecting(true)
          }/*  else {
            setIntersecting(false)
          } */
        },
        {
          threshold,
        },
      )
      intersectionObserver.observe(ref.current)

      return () => {
        if (ref.current) {
          intersectionObserver.unobserve(ref.current)
        }
      }
    }
  }, [])

  /* useEffect(() => {
    if (intersecting) {
      setTimeout(() => {
        setRevealed(true)
      }, Number(delay));
    }
  }, [intersecting]) */

  return (
    <div
      style={{
        transitionDuration: duration,
        transitionDelay: delay,
        transform: !intersecting /* && !revealed */
          ? `translate(${x}px, ${y}px)`
          : 'translate(0px, 0px)',
      }}
      className={`transition ${!intersecting /* && !revealed */ ? 'opacity_0' : 'opacity_100'}`}
      ref={ref}
    >
      {children}
    </div>
  )
}
