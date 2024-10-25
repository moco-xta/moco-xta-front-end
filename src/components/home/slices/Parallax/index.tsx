import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import useWindowSize from '@/hooks/useWindowSize'

import './index.scss'

interface ParallaxInterface {
  className: string
  children: JSX.Element
  speed: number
  id?: string
}

export default function Parallax({
  className,
  children,
  speed = 1,
  id = 'parallax',
}: ParallaxInterface) {
  const trigger = useRef<HTMLDivElement>(null!)
  const target = useRef<HTMLDivElement>(null!)
  const timeline = useRef<GSAPTimeline>(null!)

  const { width: windowWidth } = useWindowSize()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const y = windowWidth * speed * 0.1
    const setY = gsap.quickSetter(target.current, 'y', 'px')

    timeline.current = gsap.timeline({
      scrollTrigger: {
        id: id,
        trigger: trigger.current,
        scrub: true,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (e) => {
          setY(e.progress * y)
        },
      },
    })

    return () => {
      timeline?.current?.kill()
    }
  }, [id, speed, windowWidth])

  return (
    <div
      ref={trigger}
      className={className}
    >
      <div ref={target}>{children}</div>
    </div>
  )
}
