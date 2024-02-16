'use client'

import React, { useState } from 'react'
import Link from 'next/link'

import { Routes } from '@/routes/routes'

import HamburgerMenuIcon from '@/components/icons/hamburger_menu_icon'

import './index.scss'

export default function NavBar() {

	const [menuIsOpen, setMenuIsOpen] = useState(false)

  const handleSetMenuIsOpen = () => {
    setMenuIsOpen(!menuIsOpen)
  }

  return (
    <>
      <div id='nav_wrapper' className={`${menuIsOpen ? 'open' : ''}`}>
        <nav>
          <ul>
            {Routes.map(route => {
              if (route.name !== 'Home') {
                return (
                  <li key={`navBarLink_${route.name}`}>
                    <Link href={route.path}>{route.name}</Link>
                  </li>
                )
              }
            })}
          </ul>
        </nav>
      </div>
      <HamburgerMenuIcon handleSetMenuIsOpen={handleSetMenuIsOpen} />
    </>
  )
}
