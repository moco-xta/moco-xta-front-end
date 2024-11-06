import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTranslations } from 'next-intl'

import { MenuButtonInterface } from '@/interfaces/buttonsInterfaces'

import { AppDispatch, RootState } from '@/redux/store'
import { toggleMenu } from '@/redux/slice/appStateSlice'

import './index.scss'

export default function MenuButton({ type }: MenuButtonInterface) {
  const t = useTranslations('BUTTONS')

  const dispatch = useDispatch<AppDispatch>()

  const menuIsOpen = useSelector((state: RootState) => state.appState.menuIsOpen)

  const handleToggleMenu = () => {
    dispatch(toggleMenu())
  }

  const timelineRef = useRef<GSAPTimeline>(null!)

  useGSAP(
    () => {
      gsap.set('.menu_link_item_holder', { y: 75 })

      timelineRef.current = gsap
        .timeline({ paused: true })
        .to('#menu_overlay', {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          duration: 1.25,
          ease: 'power4.inOut',
        })
        .to('.menu_link_item_holder', {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: 'power4.inOut',
          delay: -0.75,
        })
    },
    { scope: '#menu' },
  )

  useEffect(() => {
    if (menuIsOpen) {
      timelineRef.current.play()
    } else {
      timelineRef.current.reverse()
    }
  }, [menuIsOpen])

  return (
    <div
      id='menu_button'
      onClick={handleToggleMenu}
    >
      {type === 'open' ? 'Menu' : t('CLOSE')}
    </div>
  )
}
