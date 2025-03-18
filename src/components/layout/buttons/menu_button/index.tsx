import React, { useCallback, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { AppDispatch, RootState } from '@/redux/store'
import {
  setMenuContentPosition,
  toggleLocaleSwitcher,
  toggleMenu,
} from '@/redux/slices/appStateSlice'

import './index.scss'
import { helveticaRomanFont } from '@/app/fonts'

export default function MenuButton() {
  const dispatch = useDispatch<AppDispatch>()

  const { menu, localeSwitcher } = useSelector((state: RootState) => state.appState)

  const handleOnClick = () => {
    dispatch(toggleMenu())
    if (localeSwitcher.isOpen) dispatch(toggleLocaleSwitcher())
  }

  const timelineRef = useRef<GSAPTimeline>(gsap.timeline({ paused: true }))
  const menuButtonRef = useRef<HTMLButtonElement>(null!)

  const handleResize = useCallback(() => {
    const rect = menuButtonRef.current.getBoundingClientRect()

    dispatch(
      setMenuContentPosition({
        top: rect.top + rect.height,
        right: window.innerWidth - (rect.left + rect.width),
      }),
    )
  }, [dispatch])

  useEffect(() => {
    if (menuButtonRef.current) handleResize()
  }, [dispatch, handleResize, menuButtonRef])

  useEffect(() => {
    handleResize()

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [handleResize])

  useGSAP(() => {
    timelineRef.current
      .to(
        '#routes',
        {
          onStart: () => {
            document.getElementById('menu')!.style.zIndex = '1'
            document.getElementById('locale_switcher_options')!.style.zIndex = '0'
          },
          translateX: 0,
          translateY: 0,
          translateZ: 0,
          rotateZ: 0,
          scale: 1,
          opacity: 1,
          duration: 0.25,
          ease: 'power1.out',
          delay: 0.1,
        },
        0,
      )
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
          delay: 0.1,
        },
        0,
      )
  })

  useEffect(() => {
    if (menu.isOpen) {
      timelineRef.current.play()
    } else {
      timelineRef.current.reverse()
    }
  }, [menu.isOpen])

  return (
    <button
      ref={menuButtonRef}
      id='menu_button'
      className={`${helveticaRomanFont.className}`}
      onClick={handleOnClick}
    >
      MENU
    </button>
  )
}
