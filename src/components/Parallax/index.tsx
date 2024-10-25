import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import useWindowSize from '@/hooks/useWindowSize'

interface ParallaxInterface {
  id: string
  className?: string
  style: {
    [key: string]: string
  }
  speed: number
  children: JSX.Element
}

export default function Parallax({ id, className, style, speed = 1, children }: ParallaxInterface) {
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
      style={style}
    >
      <div ref={target}>{children}</div>
    </div>
  )
}
