'use client'

import React, { useRef } from 'react'

import Logo from '@/components/shared/header/logo'
import { NavBar } from '@/components/shared/header/nav_bar'

import './index.scss'

export default function Header() {
  const navWrapperRef = useRef<HTMLDivElement>(null!)

  return (
    <header>
      <Logo />
      <NavBar />
    </header>
  )
}
