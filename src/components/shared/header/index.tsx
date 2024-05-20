'use client'

import React from 'react'

import Logo from '@/components/shared/header/logo'
import Logo3D from './logo_3D'
import { NavBar } from '@/components/shared/header/nav_bar'

import './index.scss'

export default function Header() {
  return (
    <header>
      <Logo3D />
      <NavBar />
    </header>
  )
}
