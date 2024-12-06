import React, { useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTranslations } from 'next-intl'

import { routes } from '@/routes/routes'

import useIsLargeScreen from '@/hooks/useIsLargeScreen'

import { AppDispatch, RootState } from '@/redux/store'
import { setLocaleSwitcherIsOpen, setMenuIsOpen } from '@/redux/slice/appStateSlice'

import { AuthenticationButton } from '@/components/buttons'
import LocaleSwitcher from '@/components/buttons/locale_switcher'
// import Hamburger from '@/components/buttons/hamburger'
import Menu from '../../menu'
import Authentication from '../../authentication'

import { navAnimation } from 'animations/shared/header'

import './index.scss'

export default function Nav() {
  const t = useTranslations('ROUTES')

  useGSAP(() => {
    gsap.from(navAnimation.selector, navAnimation.params)
  })

  const pathname = usePathname()

  const dispatch = useDispatch<AppDispatch>()

  const { isLargeScreen } = useIsLargeScreen()

  const menuIsOpen = useSelector((state: RootState) => state.appState.menuIsOpen)

  useEffect(() => {
    dispatch(setMenuIsOpen(false))
  }, [dispatch, isLargeScreen])

  useEffect(() => {
    if (!menuIsOpen) dispatch(setLocaleSwitcherIsOpen(false))
  }, [dispatch, menuIsOpen])

  function handleSetMenuIsOpen() {
    dispatch(setMenuIsOpen(!menuIsOpen))
  }

  return (
    <>
      {/* <div
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
      </div> */}
      {/* <Hamburger /> */}
      <Menu />
      <Authentication />
    </>
  )
}
