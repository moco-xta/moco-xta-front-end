import React from 'react'
import Link from 'next/link'
import { useDispatch } from 'react-redux'

import { AppDispatch } from '@/redux/store'
import {
  setAuthenticationIsOpen,
  setLocaleSwitcherIsOpen,
  setMenuIsOpen,
} from '@/redux/slice/appStateSlice'

import { Routes } from '@/routes/new/routes'

import LogoCanvas from '@/components/three/canvas/logo_canvas/LogoCanvas'

import './index.scss'

export default function Logo() {
  const dispatch = useDispatch<AppDispatch>()

  const handleOnClickLogoMoco = () => {
    dispatch(setLocaleSwitcherIsOpen(false))
    dispatch(setMenuIsOpen(false))
    dispatch(setAuthenticationIsOpen(false))
  }

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
