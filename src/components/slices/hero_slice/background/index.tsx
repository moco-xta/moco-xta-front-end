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
      timeline.fromTo(
        '#circle',
        {
          r: 0,
          opacity: 0,
        },
        {
          duration: 2,
          ease: 'power3.out',
          r: 450,
          opacity: 1,
        },
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
    {
      scope: container,
    },
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
              stopColor={variables.circle_gradient_in}
            />
            <stop
              offset='95%'
              stopColor={variables.circle_gradient_out}
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

      {/* <svg
        xmlns='http://www.w3.org/2000/svg'
        width='300'
        height='300'
      >
        <filter
          id='noiseFilter'
          x='0'
          y='0'
        >
          <feTurbulence
            type='fractalNoise'
            baseFrequency='0.75'
            stitchTiles='stitch'
          />
        </filter>

        <rect
          width='300'
          height='300'
          fill='#fff'
        />
        <rect
          width='300'
          height='300'
          filter='url(#n)'
          opacity='0.80'
        />
      </svg>

      <svg>
        <filter id='noiseFilter'>
          <feTurbulence
            type='fractalNoise'
            baseFrequency='0.6'
            stitchTiles='stitch'
          />
          <feColorMatrix
            in='colorNoise'
            type='matrix'
            values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'
          />
          <feComposite
            operator='in'
            in2='SourceGraphic'
            result='monoNoise'
          />
          <feBlend
            in='SourceGraphic'
            in2='monoNoise'
            mode='screen'
          />
        </filter>
      </svg> */}
    </div>
  )
}
