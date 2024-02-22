'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'

/* import {Link} from '../navigation' */

import { Routes } from '@/routes/routes'

import HamburgerMenuIcon from '@/components/icons/hamburger_menu_icon'
import LocaleSwitcher from '@/components/shared/locale_switcher'

import './index.scss'

export default function NavBar() {
  const pathname = usePathname()
  const locale = useLocale()

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
                    {/* @ts-ignore */}
                    <Link
                      href={route.path}
                      className={`link ${pathname === route.path ? 'active' : ''}`}
                    >
                      {t(route.key)}
                    </Link>
                  </li>
                )
              }
            })}
            <li>
              <LocaleSwitcher />
            </li>
          </ul>
        </nav>
      </div>
      <HamburgerMenuIcon handleSetMenuIsOpen={handleSetMenuIsOpen} />
    </>
  )
}
