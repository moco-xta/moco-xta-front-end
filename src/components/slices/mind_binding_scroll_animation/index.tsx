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
  const timelineRef = useRef<GSAPTimeline>(gsap.timeline())

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

    timelineRef.current
      .to('.revealer', {
        y: '30vh',
        rotate: 360,
        scrollTrigger: {
          trigger: '#mind_binding_scroll_animation_slice',
          start: 'top top',
          end: '+=400',
          scrub: true,
        },
      })
      .to('.revealer_1, .revealer_2', {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        scrollTrigger: {
          trigger: '#mind_binding_scroll_animation_slice',
          start: 'top top',
          end: '+=400',
          scrub: true,
        },
      })
      .to('.revealer', {
        x: '20vw',
        scrollTrigger: {
          trigger: '#mind_binding_scroll_animation_slice',
          start: '+=400',
          end: '+=600',
          scrub: true,
        },
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
      id='mind_binding_scroll_animation_slice_parallax'
      speed={0}
      style={{
        alignSelf: 'flex-start',
      }}
    >
      <section
        ref={sectionRef}
        id='mind_binding_scroll_animation_slice'
        className='fullscreen'
      >
        <div className='revealer'>
          <div className='revealer_1'></div>
          <div className='revealer_2'></div>
        </div>
      </section>
    </Parallax>
  )
}
