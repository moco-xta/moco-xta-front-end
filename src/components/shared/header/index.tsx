'use client'

import React from 'react'

import Logo from './logo'
import Nav from './nav'
import MenuButton from '@/components/buttons/menu/menu_button'

import './index.scss'

export default function Header() {
  return (
    <header className='header_zIndex'>
      <Logo isMainLogo={true} />
      {/* <Nav /> */}
      <MenuButton />
    </header>
  )
}
