import React, { useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslations } from 'next-intl'

import { Routes } from '@/routes/new/routes'

import useResize from '@/hooks/new/useResize'

import { AppDispatch, RootState } from '@/redux/store'
import {
  setLocaleSwitcherIsOpen,
  setMenuIsOpen,
} from '@/redux/slice/appStateSlice'

import { AuthenticationButton } from '@/components/new/buttons'
import LocaleSwitcher from '@/components/new/buttons/locale_switcher'
import Hamburger from '@/components/new/buttons/hamburger'
import Authentication from '../../authentication'

import './index.scss'

export default function Nav() {
  const t = useTranslations('ROUTES')

  const pathname = usePathname()

  const dispatch = useDispatch<AppDispatch>()

  const { isDesktop } = useResize()

  const menuIsOpen = useSelector(
    (state: RootState) => state.appState.menuIsOpen,
  )

  useEffect(() => {
    if (isDesktop) setMenuIsOpen(false)
    setLocaleSwitcherIsOpen(false)
  }, [isDesktop])

  useEffect(() => {
    if (!menuIsOpen) setLocaleSwitcherIsOpen(false)
  }, [menuIsOpen])

  function handleSetMenuIsOpen() {
    dispatch(setMenuIsOpen(!menuIsOpen))
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
            <AuthenticationButton />
            <LocaleSwitcher />
          </ul>
        </nav>
      </div>
      <Hamburger />
      <Authentication />
    </>
  )
}
