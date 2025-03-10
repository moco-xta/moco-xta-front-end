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
    timelineRef.current.to('#routes', {
      // xPercent: 0,
      // yPercent: 0,
      // z: 0,
      // rotationX: 0,
      // rotationY: 0,
      // rotationZ: 0,
      // rotationY: 0,
      // rotate3d: '0, 0, 0, 0',
      // rotation: "1, 0, 0, -20deg",
      // rotation: "360,1,1,0",
      // rotation: '0, 0, 0',
      translateX: 0,
      translateY: 0,
      translateZ: 0,
      // rotateX: 0,
      rotateZ: 0,
      scale: 1,
      opacity: 1,
      duration: 0.25,
      ease: 'power1.out',
    })
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
