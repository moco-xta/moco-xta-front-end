import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { AppDispatch, RootState } from '@/redux/store'
import { toggleMenu } from '@/redux/slices/appStateSlice'

import './index.scss'
import { helveticaRomanFont } from '@/app/fonts'

export default function MenuButton() {
  const dispatch = useDispatch<AppDispatch>()

  const menuIsOpen = useSelector((state: RootState) => state.appState.menuIsOpen)

  const handleToggleMenu = () => {
    dispatch(toggleMenu())
  }

  const timelineRef = useRef<GSAPTimeline>(gsap.timeline({ paused: true }))

  useGSAP(() => {
    /* timelineRef.current
      .to('#routes', {
        translateX: 0,
        translateY: 0,
        translateZ: 0,
        rotateZ: 0,
        scale: 1,
        opacity: 1,
        duration: 0.25,
        ease: 'power1.out',
        delay: 0.1
      })
      .to(
        '#socials_container',
        {
          translateX: 0,
          translateY: 0,
          translateZ: 0,
          rotateZ: 0,
          scale: 1,
          opacity: 1,
          duration: 0.25,
          ease: 'power1.out',
          delay: 0.1
        },
        0,
      ) */
  })

  useEffect(() => {
    if (menuIsOpen) {
      timelineRef.current.play()
    } else {
      timelineRef.current.reverse()
    }
  }, [menuIsOpen])

  return (
    <button
      id='menu_button'
      className={`${helveticaRomanFont.className}`}
      onClick={handleToggleMenu}
    >
      MENU
    </button>
  )
}
