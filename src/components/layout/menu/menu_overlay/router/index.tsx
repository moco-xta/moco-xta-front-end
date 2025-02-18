import React from 'react'
import { useDispatch } from 'react-redux'
import { useTranslations } from 'next-intl'
import { isMobile } from 'react-device-detect'

import { Link, usePathname } from '@/i18n/routing'

import { AppDispatch } from '@/redux/store'
import { toggleMenu } from '@/redux/slices/appStateSlice'

import { routesData } from '@/routes/routes'

import './index.scss'

export default function Router() {
  const t = useTranslations('ROUTES')
  const pathname = usePathname()
  const dispatch = useDispatch<AppDispatch>()

  const handleToggleMenu = () => {
    dispatch(toggleMenu())
  }

  return (
    <div id='routes'>
      {routesData
        .filter((route) => route.hasOwnProperty('index'))
        .filter((route) => !isMobile ? true : route.mobile ? true : false)
        .sort((a, b) => a.index! - b.index!)
        .map((route) => {
          return (
            <div
              key={`route_${route.translationKey}`}
              className='route'
            >
              <div
                className='routes_wrapper'
                onClick={handleToggleMenu}
              >
                <Link
                  href={route.path}
                  className={`route_link ${pathname === route.path ? 'active' : ''}`}
                >
                  {t(route.translationKey)}
                </Link>
              </div>
            </div>
          )
        })}
    </div>
  )
}
