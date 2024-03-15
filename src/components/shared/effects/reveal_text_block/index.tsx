'use client'

import React, { useEffect, useRef, useState } from 'react'

import { RevealComponentInterface } from '@/interfaces/components/shared/effects/revealComponentInterface'

import './index.scss'

export default function RevealTextBlock({
  children,
  threshold,
  duration,
  delay = '0',
  x = 0,
  y = 0,
}: RevealComponentInterface) {
  x = x || 0
  y = y || 0
  const ref = useRef(null)
  const [intersecting, setIntersecting] = useState(false)

  useEffect(() => {
    if (ref.current) {
      const intersectionObserver = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setIntersecting(true)
          } else {
            setIntersecting(false)
          }
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

  return (
    <div
      style={{
        transitionDuration: duration,
        transitionDelay: delay,
        transform: !intersecting
          ? `translate(${x}px, ${y}px)`
          : 'translate(0px, 0px)',
      }}
      className={`transition ${intersecting ? 'opacity_100' : 'opacity_0'}`}
      ref={ref}
    >
      {children}
    </div>
  )
}
