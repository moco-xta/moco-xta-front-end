import React from 'react'
import { useDispatch } from 'react-redux'
import { useTranslations } from 'next-intl'

import { Link, usePathname } from '@/i18n/routing'

import { AppDispatch } from '@/redux/store'
import { toggleMenu } from '@/redux/slices/appStateSlice'

import RevealCasinoByCharacter from '@/animation/texts/reveal_casino_by_character'

import { routesData } from '@/routes/routes'

// import './index.scss'

export default function Routes() {
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
        .sort((a, b) => a.index! - b.index!)
        .map((route) => {
          return (
            <Link
              key={`route_${route.translationKey}`}
              href={route.path}
              onClick={handleToggleMenu}
            >
              <RevealCasinoByCharacter
                route={t(route.translationKey)}
                isActive={pathname === route.path}
              />
            </Link>
          )
        })}
    </div>
  )
}
