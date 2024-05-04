'use client'

import React, { forwardRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'

import { Routes } from '@/routes/routes'

import useIsDesktop from '@/hooks/useIsDesktop'

import HamburgerMenu from '@/components/buttons/hamburger_menu'
import LocaleSwitcher from '@/components/shared/header/locale_switcher'
import Authentication from '@/components/shared/authentication'
import AuthenticationButton from '@/components/buttons/authentication_button'

import './index.scss'

export const NavBar = forwardRef<HTMLDivElement, {}>(function NavBar(_, ref) {
  const t = useTranslations('ROUTES')

  const pathname = usePathname()

  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [authenticationIsOpen, setAuthenticationIsOpen] = useState(false)

  function handleSetMenuIsOpen() {
    setMenuIsOpen(!menuIsOpen)
  }

  return (
    <>
      <div
        ref={ref}
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
            <LocaleSwitcher />
            <AuthenticationButton
              setAuthenticationIsOpen={setAuthenticationIsOpen}
            />
          </ul>
        </nav>
      </div>
      <HamburgerMenu handleSetMenuIsOpen={handleSetMenuIsOpen} />
      {authenticationIsOpen && (
        <Authentication setAuthenticationIsOpen={setAuthenticationIsOpen} />
      )}
    </>
  )
})
