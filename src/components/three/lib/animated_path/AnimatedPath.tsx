import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { scaleSvgPath } from '@/helpers/svgHelpers'

export type TPathAnimation = {
  id: number
  path: string
  stroke?: string
  strokeWidth?: number
  preserveAspectRatio?: string // New prop
  maxWidth?: number // New prop
}

export default function AnimatedPath({
  id,
  path,
  stroke,
  strokeWidth,
  preserveAspectRatio = 'xMidYMid meet',
  maxWidth = 800,
}: TPathAnimation) {
  const pathRef = useRef<SVGPathElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!pathRef.current) return

    const pathElement = pathRef.current
    const length = pathElement.getTotalLength()

    // Set initial styles
    gsap.set(pathElement, {
      strokeDasharray: length,
      strokeDashoffset: length,
    })

    // ScrollTrigger animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: svgRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: true,
        markers: true, // Remove for production
      },
    })

    tl.to(pathElement, {
      strokeDashoffset: 0,
      duration: 2,
      ease: 'power1.inOut',
    })

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  useEffect(() => {
    console.log('pathRef.current', pathRef.current)
  }, [pathRef])

  return (
    <div style={{ zIndex: `${id}`, position: 'absolute', width: '100%', height: '100%' }}>
      <svg
        ref={svgRef}
        viewBox='0 0 100 100'
        preserveAspectRatio={preserveAspectRatio}
      >
        <path
          ref={pathRef}
          d={scaleSvgPath(path, 0.145)}
          fill='none'
          stroke={stroke}
          // opacity={length}
          strokeWidth={strokeWidth}
          // transform="scale(0.3 0.3)"
        />
      </svg>
    </div>
  )
}
