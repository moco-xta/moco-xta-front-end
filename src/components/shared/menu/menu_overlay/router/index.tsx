import React from 'react'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { useTranslations } from 'next-intl'

import { routes } from '@/routes/routes'

import { AppDispatch } from '@/redux/store'
import { toggleMenu } from '@/redux/slice/appStateSlice'

import './index.scss'

export default function Router() {
  const t = useTranslations('ROUTES')

  const dispatch = useDispatch<AppDispatch>()

  const handleToggleMenu = () => {
    dispatch(toggleMenu())
  }

  return (
    <div id='routes'>
      {routes
        .filter((route) => route.hasOwnProperty('index'))
        // @ts-ignore
        .sort((a, b) => a.index - b.index)
        .map((route) => {
          return (
            <div
              key={`route_${route.key}`}
              className='route'
            >
              <div
                className='route_holder'
                onClick={handleToggleMenu}
              >
                <Link
                  href={route.path}
                  className='route_link'
                >
                  {t(route.key)}
                </Link>
              </div>
            </div>
          )
        })}
    </div>
  )
}
