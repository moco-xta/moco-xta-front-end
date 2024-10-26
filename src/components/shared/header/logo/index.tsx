import React from 'react'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { AppDispatch } from '@/redux/store'
import {
  setAuthenticationIsOpen,
  setLocaleSwitcherIsOpen,
  setMenuIsOpen,
} from '@/redux/slice/appStateSlice'

import { Routes } from '@/routes/routes'

import LogoCanvas from '@/components/three/canvas/logo_canvas/LogoCanvas'

import { logoMocoAnimation } from 'animations/header'

import './index.scss'

gsap.registerPlugin(useGSAP)

export default function Logo() {
  const dispatch = useDispatch<AppDispatch>()

  const handleOnClickLogoMoco = () => {
    dispatch(setLocaleSwitcherIsOpen(false))
    dispatch(setMenuIsOpen(false))
    dispatch(setAuthenticationIsOpen(false))
  }

  useGSAP(() => {
    gsap.from(logoMocoAnimation.translation.selector, logoMocoAnimation.translation.params)
  })

  return (
    <div
      id='logo'
      onClick={handleOnClickLogoMoco}
    >
      <Link href={Routes.find((route) => route.key === 'HOME')!.path}>
        <LogoCanvas />
      </Link>
    </div>
  )
}
