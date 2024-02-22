'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

import { Routes } from '@/routes/routes'

import HamburgerMenuIcon from '@/components/icons/hamburger_menu_icon'

import './index.scss'

export default function NavBar() {
  const t = useTranslations('ROUTES')

  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const handleSetMenuIsOpen = () => {
    setMenuIsOpen(!menuIsOpen)
  }

  return (
    <>
      <div
        id='nav_wrapper'
        className={`${menuIsOpen ? 'open' : ''}`}
      >
        <nav>
          <ul>
            {Routes.map((route) => {
              if (route.key !== 'HOME') {
                return (
                  <li key={`navBarLink_${route.key}`}>
                    <Link href={route.path}>{t(route.key)}</Link>
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
