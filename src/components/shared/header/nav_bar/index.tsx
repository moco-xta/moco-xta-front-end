'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'

/* import {Link} from '../navigation' */

import { Routes } from '@/routes/routes'

import HamburgerMenuIcon from '@/components/icons/hamburger_menu_icon'
import LocaleSwitcher from '@/components/shared/header/locale_switcher'

import './index.scss'

export default function NavBar() {
  const pathname = usePathname()
  const locale = useLocale()

  const t = useTranslations('ROUTES')

  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [isDesktop, setDesktop] = useState(window.innerWidth > 700)

  const updateMedia = () => {
    setDesktop(window.innerWidth > 700)
  }

  useEffect(() => {
    window.addEventListener('resize', updateMedia)
    return () => window.removeEventListener('resize', updateMedia)
  }, [])

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
            {Routes.filter((route) => route.hasOwnProperty('index'))
              // @ts-ignore
              .sort((a, b) => a.index - b.index)
              .map((route) => {
                return (
                  <li key={`navBarLink_${route.key}`}>
                    <span className='span_link_wrapper' title={t(route.key)}>
                      <Link
                        href={route.path}
                        className={`link ${pathname === route.path ? 'active' : ''}`}
                      >
                        {t(route.key)}
                      </Link>
                    </span>
                  </li>
                )
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
