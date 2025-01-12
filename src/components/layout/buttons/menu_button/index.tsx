import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTranslations } from 'next-intl'

import type { TMenuButton } from '@/types/components/layout/buttons/types'

import { AppDispatch, RootState } from '@/redux/store'
import { toggleMenu } from '@/redux/slices/appStateSlice'

import { menuData } from '@/data/menu/menuData'

import './index.scss'

export default function MenuButton({ state }: TMenuButton) {
  const t = useTranslations('LAYOUT.BUTTONS')

  const timelineRef = useRef<GSAPTimeline>(gsap.timeline({ paused: true }))

  const dispatch = useDispatch<AppDispatch>()
  const menuIsOpen = useSelector((state: RootState) => state.appState.menuIsOpen)

  const handleToggleMenu = () => {
    dispatch(toggleMenu())
  }

  useGSAP(() => {
    gsap.set('.routes_wrapper', { y: menuData.animations.routeWrapper.set.y })

    timelineRef.current
      .to(menuData.animations.menuOverlay.selector, menuData.animations.menuOverlay.params)
      .to(menuData.animations.routeWrapper.selector, menuData.animations.routeWrapper.params)
  })

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
      {state === 'open' ? 'Menu' : t('CLOSE')}
    </div>
  )
}
