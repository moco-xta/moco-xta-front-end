import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTranslations } from 'next-intl'

import { MenuButtonInterface } from '@/interfaces/buttonsInterfaces'

import { AppDispatch, RootState } from '@/redux/store'
import { toggleMenu } from '@/redux/slice/appStateSlice'

import './index.scss'
import { menuAnimation } from 'animations/menu'

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
      gsap.set('.route_holder', { y: 75 })

      timelineRef.current = gsap
        .timeline({ paused: true })
        .to(menuAnimation.menuOverlayAnimation.selector, menuAnimation.menuOverlayAnimation.params)
        .to(menuAnimation.routeHolderAnimation.selector, menuAnimation.routeHolderAnimation.params)
    },
    { scope: menuAnimation.scope },
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
