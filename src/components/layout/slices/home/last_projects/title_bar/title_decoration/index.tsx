import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTranslations } from 'next-intl'

import './index.scss'

export default function LastProjectsTitleDecoration() {
  const t = useTranslations('HOME.LAST_PROJECTS')

  const containerRef = useRef<HTMLDivElement>(null!)

  useGSAP(
    () => {
      gsap.to('.last-projects-title-decoration-line', {
        yPercent: -100,
        opacity: 1,
        duration: 0.25,
        ease: 'none',
        stagger: 0.1,
        delay: 0.5,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      })
    },
    { scope: containerRef },
  )

  return (
    <div
      ref={containerRef}
      id='last-projects-title-decoration'
    >
      <div className='last-projects-title-decoration-line-wrapper'>
        <div className='last-projects-title-decoration-line'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </div>
      <div className='last-projects-title-decoration-line-wrapper'>
        <div className='last-projects-title-decoration-line'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </div>
      <div className='last-projects-title-decoration-line-wrapper'>
        <div className='last-projects-title-decoration-line'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </div>
    </div>
  )
}
