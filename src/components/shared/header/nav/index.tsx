import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTranslations } from 'next-intl'

import useIsLargeScreen from '@/hooks/useIsLargeScreen'

import { AppDispatch, RootState } from '@/redux/store'
import { setLocaleSwitcherIsOpen, setMenuIsOpen } from '@/redux/slice/appStateSlice'

import Menu from '../../menu'
import Authentication from '../../authentication'

import './index.scss'
import { navAnimation } from 'animations/shared/header'

export default function Nav() {
  const t = useTranslations('ROUTES')

  useGSAP(() => {
    gsap.from(navAnimation.selector, navAnimation.params)
  })

  const pathname = usePathname()

  const dispatch = useDispatch<AppDispatch>()

  const { isLargeScreen } = useIsLargeScreen()

  const menuIsOpen = useSelector((state: RootState) => state.appState.menuIsOpen)

  useEffect(() => {
    dispatch(setMenuIsOpen(false))
  }, [dispatch, isLargeScreen])

  useEffect(() => {
    if (!menuIsOpen) dispatch(setLocaleSwitcherIsOpen(false))
  }, [dispatch, menuIsOpen])

  return (
    <>
      <Menu />
      <Authentication />
    </>
  )
}
