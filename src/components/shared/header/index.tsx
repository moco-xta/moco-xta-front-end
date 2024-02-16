import React from 'react'

import Logo from '@/components/shared/logo'
import NavBar from '@/components/shared/nav_bar'

import './index.scss'

export default function Header() {
  return (
    <header>
      <Logo />
      <NavBar />
    </header>
  )
}
