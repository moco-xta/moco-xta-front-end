'use client'

import React, { forwardRef, useEffect, useState } from 'react'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { usePathname } from 'next/navigation'
import { toast } from 'sonner'
import { useTranslations } from 'next-intl'

import { Routes } from '@/routes/routes'

import { RootState } from '@/redux/store'

import { AppDispatch } from '@/redux/store'
import { useLogOutMutation } from '@/redux/api/authenticationApi'
import { setIsAuthenticated } from '@/redux/slice/authenticationSlice'

import HamburgerMenu from '@/components/buttons/hamburger_menu'
import LocaleSwitcher from '@/components/shared/header/locale_switcher'
import Authentication from '../../authentication'

import { getAccessToken, removeTokens } from '@/helpers/localStorageHelpers'

import './index.scss'

export const NavBar = forwardRef<HTMLDivElement, {}>(function NavBar(_, ref) {
  const t = useTranslations('ROUTES')

  const pathname = usePathname()

  window.scrollTo(0, 0)

  const dispatch = useDispatch<AppDispatch>()

  const isAuthenticated = useSelector(
    (state: RootState) => state.authentication.isAuthenticated,
  )

  const [logOut] = useLogOutMutation()

  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [authenticationIsOpen, setAuthenticationIsOpen] = useState(false)
  const [isDesktop, setDesktop] = useState(window.innerWidth > 700)

  const updateMedia = () => {
    setDesktop(window.innerWidth > 700)
  }

  useEffect(() => {
    document.addEventListener('resize', updateMedia)
    return () => document.removeEventListener('resize', updateMedia)
  }, [])

  function handleSetMenuIsOpen() {
    setMenuIsOpen(!menuIsOpen)
  }

  function handleAuthenticationIsOpen() {
    setAuthenticationIsOpen(true)
  }

  function handleLogOut() {
    if (getAccessToken()) {
      toast.promise(
        logOut({
          access_token: getAccessToken()!,
        }),
        {
          loading: t('TOASTERS.AUTHENTIFICATION.LOG_OUT.LOADING'),
          success: () => {
            dispatch(setIsAuthenticated(false))
            return t('TOASTERS.AUTHENTIFICATION.LOG_OUT.SUCCESS')
          },
          error: t('TOASTERS.AUTHENTIFICATION.LOG_OUT.ERROR'),
        },
      )
    }
    removeTokens()
  }

  return (
    <>
      <div
        ref={ref}
        id='nav_wrapper'
        className={`${menuIsOpen ? 'open' : ''}`}
      >
        <nav
          style={{
            marginTop: pathname === '/' && isDesktop ? '20px' : '0px',
            marginRight: pathname === '/' && isDesktop ? '20px' : '0px',
          }}
        >
          <ul>
            {Routes.filter((route) => route.hasOwnProperty('index'))
              // @ts-ignore
              .sort((a, b) => a.index - b.index)
              .map((route) => {
                return (
                  <li
                    key={`navBarLink_${route.key}`}
                    className='li_route'
                    style={{
                      marginRight:
                        pathname === '/' && isDesktop ? '20px' : '0px',
                    }}
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
            <li>
              <LocaleSwitcher />
            </li>
            <li>
              {!isAuthenticated ? (
                <button onClick={handleAuthenticationIsOpen}>Login</button>
              ) : (
                <button onClick={handleLogOut}>Log out</button>
              )}
            </li>
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
