import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import variables from '@/styles/variables.module.scss'
import './index.scss'

export default function Background() {
  gsap.registerPlugin(useGSAP)
  const timeline = gsap.timeline()

  const container = useRef<SVGSVGElement>(null!)

  useGSAP(
    () => {
      timeline
        .fromTo(
          '#circle',
          {
            r: 0,
            opacity: 0
          },
          {
            duration: 2,
            ease: 'power3.out',
            r: 450,
            opacity: 1
          }
        )
        /* .fromTo(
          '#gradient_in_stop',
          {
            offset: '90%',
          },
          {
            duration: 6,
            ease: 'power3.out',
            offset: '10%',
          }
        ) */
    },
    { scope: container },
  )

  return (
    <div id='background_container'>
      <svg
        ref={container}
        id='svg'
        viewBox='-500 -500 1000 1000'
        xmlns='http://www.w3.org/2000/svg'
      >
        <defs>
          <radialGradient id='myGradient'>
            <stop
              id='gradient_in_stop'
              stop-color={variables.circle_gradient_in}
            />
            <stop
              offset='95%'
              stop-color={variables.circle_gradient_out}
            />
          </radialGradient>
        </defs>
        <filter id='blurMe'>
          <feGaussianBlur stdDeviation='5' />
        </filter>
        <circle
          id='circle'
          fill="url('#myGradient')"
          filter='url(#blurMe)'
        />
      </svg>
    </div>
  )
}
