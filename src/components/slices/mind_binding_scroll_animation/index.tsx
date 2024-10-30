import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import Parallax from '@/components/parallax'

import { sanitizedData } from '@/helpers/securityHelpers'

import './index.scss'

export default function MindBendingScrollAnimation() {
  const sectionRef = useRef<HTMLElement>(null!)

  useGSAP((_, contextSafe) => {
    const cursorRef = document.querySelector('#cursor')

    const enterContent = `<span>THIS IS MIND BENDING</span>`
    const leaveContent = `<span></span>`

    // @ts-ignore
    const handleMouseEnter = contextSafe(() => {
      cursorRef!.innerHTML = sanitizedData(enterContent)
      gsap.to(cursorRef, {
        x: 200,
        y: 200,
        duration: 1,
        ease: 'none',
      })
    })

    // @ts-ignore
    const handleMouseLeave = contextSafe(() => {
      cursorRef!.innerHTML = sanitizedData(leaveContent)
    })

    sectionRef.current.addEventListener('mouseenter', handleMouseEnter)
    sectionRef.current.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      sectionRef.current.removeEventListener('mouseenter', handleMouseEnter)
      sectionRef.current.removeEventListener('mouseleave', handleMouseLeave)
    }
  })

  return (
    <Parallax
      id='introduction_slice_parallax'
      speed={0}
      style={{
        alignSelf: 'flex-start',
      }}
    >
      <section
        ref={sectionRef}
        id='mind_bending_scroll_animation_slice'
        className='fullscreen'
      ></section>
    </Parallax>
  )
}
