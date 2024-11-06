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

import { routes } from '@/routes/routes'

import { LogoInterface } from '@/interfaces/componentsInterfaces'

import LogoCanvas from '@/components/three/canvas/logo_canvas/LogoCanvas'

import { logoMocoAnimation } from 'animations/gsap/header'

import './index.scss'

export default function Logo({ isMainLogo = false }: LogoInterface) {
  const dispatch = useDispatch<AppDispatch>()

  const handleOnClickLogoMoco = () => {
    dispatch(setLocaleSwitcherIsOpen(false))
    dispatch(setMenuIsOpen(false))
    dispatch(setAuthenticationIsOpen(false))
  }

  useGSAP(() => {
    if (isMainLogo) gsap.from(logoMocoAnimation.selector, logoMocoAnimation.params)
  })

  return (
    <div
      id='logo'
      onClick={handleOnClickLogoMoco}
    >
      <Link href={routes.find((route) => route.key === 'HOME')!.path}>
        <LogoCanvas />
      </Link>
    </div>
  )
}
