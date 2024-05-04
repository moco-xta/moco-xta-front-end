'use client'

import React from 'react'

import Logo from '@/components/shared/header/logo'
import { NavBar } from '@/components/shared/header/nav_bar'

import './index.scss'

export default function Header() {

  return (
    <header>
      <Logo />
      <NavBar />
    </header>
  )
}
