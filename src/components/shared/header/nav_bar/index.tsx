'use client'

import React, { forwardRef, useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'

/* import {Link} from '../navigation' */

import { Routes } from '@/routes/routes'

import HamburgerMenu from '@/components/buttons/hamburger_menu'
import LocaleSwitcher from '@/components/shared/header/locale_switcher'

import './index.scss'

export const NavBar = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const pathname = usePathname()

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

  console.log('pathname: ' + pathname)

  return (
    <>
      <div
        ref={ref}
        id='nav_wrapper'
        className={`${menuIsOpen ? 'open' : ''}`}
        style={{  marginTop: pathname === '/' && isDesktop ? '20px' : '0px', marginRight: pathname === '/' && isDesktop ? '20px' : '0px' }}
      >
        <nav>
          <ul>
            {Routes.filter((route) => route.hasOwnProperty('index'))
              // @ts-ignore
              .sort((a, b) => a.index - b.index)
              .map((route) => {
                return (
                  <li key={`navBarLink_${route.key}`} className='li_route' style={{ marginRight: pathname === '/' && isDesktop ? '20px' : '0px' }}>
                    <span
                      className='span_link_wrapper'
                      title={t(route.key)}
                    >
                      <Link
                        href={route.path}
                        className={`link ${pathname === route.path ? 'active' : ''}`}
                        onClick={handleSetMenuIsOpen}
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
      <HamburgerMenu handleSetMenuIsOpen={handleSetMenuIsOpen} />
    </>
  )
})
