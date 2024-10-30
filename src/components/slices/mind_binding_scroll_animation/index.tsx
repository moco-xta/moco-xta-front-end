import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { AppDispatch } from '@/redux/store'
import { setState } from '@/redux/slice/cursorStateSlice'

import Parallax from '@/components/parallax'

import { sanitizedData } from '@/helpers/securityHelpers'

import './index.scss'

export default function MindBendingScrollAnimation() {
  const dispatch = useDispatch<AppDispatch>()

  const sectionRef = useRef<HTMLElement>(null!)

  useGSAP((_, contextSafe) => {
    const cursorRef = document.querySelector('#cursor')

    const enterContent = `<span>THIS IS MIND BENDING</span>`
    const leaveContent = `<span></span>`

    // @ts-ignore
    const handleMouseEnter = contextSafe(() => {
      dispatch(setState('mind_bending'))
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
      dispatch(setState('default'))
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
