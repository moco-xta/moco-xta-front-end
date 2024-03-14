import React from 'react'

import variables from '@/styles/variables.module.scss'
import './index.scss'

export default function Background() {
  return (
    <div id='background_container'>
      <svg
        id='svg'
        viewBox='-500 -500 1000 1000'
        xmlns='http://www.w3.org/2000/svg'
        /* xmlns="http://www.w3.org/2000/svg" */
        /* xmlns:xlink="http://www.w3.org/1999/xlink" */
      >
        <defs>
          <radialGradient id='myGradient'>
            <stop
              offset='10%'
              stop-color={variables.circle_gradient_in}
            />
            <stop
              offset='95%'
              stop-color={variables.circle_gradient_out}
            />
          </radialGradient>
        </defs>
        <filter id='displacementFilter'>
          <feTurbulence
            type='turbulence'
            baseFrequency='4'
            numOctaves='2'
            result='turbulence'
          />
          <feDisplacementMap
            in2='turbulence'
            in='SourceGraphic'
            scale='50'
            xChannelSelector='R'
            yChannelSelector='G'
          />
        </filter>
        <filter id='blurMe'>
          <feGaussianBlur stdDeviation='5' />
        </filter>
        <circle
          id='circle'
          r='450'
          fill="url('#myGradient')"
          filter='url(#blurMe)'
        />
      </svg>
    </div>
  )
}
