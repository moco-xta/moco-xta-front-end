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

  useEffect(() => {
    const refCurrent = ref.current!
    if (refCurrent) {
      const intersectionObserver = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setIntersecting(true)
          }
        },
        {
          threshold,
        },
      )
      intersectionObserver.observe(refCurrent)

      return () => {
        if (refCurrent) {
          intersectionObserver.unobserve(refCurrent)
        }
      }
    }
  }, [threshold])

  return (
    <div
      style={{
        transitionDuration: duration,
        transitionDelay: delay,
        transform: !intersecting
          ? `translate(${x}px, ${y}px)`
          : 'translate(0px, 0px)',
      }}
      className={`transition ${!intersecting ? 'opacity_0' : 'opacity_100'}`}
      ref={ref}
    >
      {children}
    </div>
  )
}
