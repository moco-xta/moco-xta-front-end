'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'

import { Routes } from '@/routes/routes'

import HamburgerMenu from '@/components/buttons/hamburger_menu'
import LocaleSwitcher from '@/components/shared/header/locale_switcher'
import Authentication from '@/components/shared/authentication'
import AuthenticationButton from '@/components/buttons/authentication_button'

import './index.scss'

export function NavBar() {
  const t = useTranslations('ROUTES')

  const pathname = usePathname()

  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [authenticationIsOpen, setAuthenticationIsOpen] = useState(false)

  function handleSetMenuIsOpen() {
    setMenuIsOpen(!menuIsOpen)
    setAuthenticationIsOpen(false)
  }

  function handleSetAuthenticationIsOpen() {
    setAuthenticationIsOpen(false)
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
                  <li
                    key={`navBarLink_${route.key}`}
                    className='li_nav'
                  >
                    <span
                      className='span_link_wrapper'
                      title={t(route.key)}
                    >
                      <Link
                        href={route.path}
                        className={`link ${pathname === route.path ? 'active' : ''}`}
                        onClick={handleSetMenuIsOpen}
                        scroll={true}
                      >
                        {t(route.key)}
                      </Link>
                    </span>
                  </li>
                )
              })}
            <AuthenticationButton
              setAuthenticationIsOpen={setAuthenticationIsOpen}
              setMenuIsOpen={setMenuIsOpen}
            />
            <LocaleSwitcher />
          </ul>
        </nav>
      </div>
      <HamburgerMenu
        menuIsOpen={menuIsOpen}
        handleSetMenuIsOpen={handleSetMenuIsOpen}
      />
      <Authentication
        authenticationIsOpen={authenticationIsOpen}
        handleSetAuthenticationIsOpen={handleSetAuthenticationIsOpen}
      />
    </>
  )
}
