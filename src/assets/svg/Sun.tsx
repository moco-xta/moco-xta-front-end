import React from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

export default function Sun() {
  useGSAP(() => {
    gsap.to('#sun', {
      x: '50vw',
      duration: 0.5,
      // ease: 'power1.out',
      scrollTrigger: {
        trigger: '#hero_slice',
        scroller: 'body',
        start: 'top top',
        // end: 'bottom -50%',
        // toggleActions: 'restart pause reverse pause'
        scrub: true,
      },
    })
  })
  return (
    <svg
      id='sun'
      viewBox='0 0 100 100'
      xmlns='http://www.w3.org/2000/svg'
    >
      <defs>
        <linearGradient
          id='grad1'
          x1='0%'
          y1='0%'
          x2='0%'
          y2='100%'
        >
          <stop
            stop-color='#dd2476'
            offset='0.1'
          />
          <stop
            stop-color='#ff512f'
            offset='0.9'
          />
        </linearGradient>
      </defs>
      <circle
        cx='50'
        cy='50'
        r='50'
        fill='url(#grad1)'
      />
    </svg>
  )
}
