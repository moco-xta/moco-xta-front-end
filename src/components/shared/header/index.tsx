'use client'

import React from 'react'

import Logo from './logo'
import Nav from './nav'

import './index.scss'

export default function Header() {
  return (
    <header className='header_zIndex'>
      <Logo />
      <Nav />
    </header>
  )
}
