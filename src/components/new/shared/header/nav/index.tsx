import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'

import { Routes } from '@/routes/new/routes'

import useResize from '@/hooks/new/useResize'

import { AuthenticationButton } from '@/components/new/buttons'
import LocaleSwitcher from '@/components/new/buttons/locale_switcher'
import Hamburger from '@/components/new/buttons/hamburger'
import Authentication from '../../authentication'

import './index.scss'

export default function Nav() {
  const t = useTranslations('ROUTES')

  const pathname = usePathname()

  const { isDesktop } = useResize()

  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [authenticationIsOpen, setAuthenticationIsOpen] = useState(false)
  const [localeSwitcherIsOpen, setLocaleSwitcherIsOpen] = useState(false)

  useEffect(() => {
    if (isDesktop) setMenuIsOpen(false)
    setLocaleSwitcherIsOpen(false)
  }, [isDesktop])

  useEffect(() => {
    if (!menuIsOpen) setLocaleSwitcherIsOpen(false)
  }, [menuIsOpen])

  function handleSetMenuIsOpen() {
    setMenuIsOpen(!menuIsOpen)
  }

  function handleSetAuthenticationIsOpen() {
    setAuthenticationIsOpen(!authenticationIsOpen)
  }

  function handleSetLocaleSwitcherIsOpen() {
    setLocaleSwitcherIsOpen(!localeSwitcherIsOpen)
  }

  return (
    <>
      <div
        id='nav_container'
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
                    className='lis'
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
              setMenuIsOpen={setMenuIsOpen}
              setAuthenticationIsOpen={setAuthenticationIsOpen}
            />
            <LocaleSwitcher
              localeSwitcherIsOpen={localeSwitcherIsOpen}
              handleSetLocaleSwitcherIsOpen={handleSetLocaleSwitcherIsOpen}
            />
          </ul>
        </nav>
      </div>
      <Hamburger
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
