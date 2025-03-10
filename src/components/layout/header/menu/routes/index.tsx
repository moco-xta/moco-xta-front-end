import React from 'react'
import { useTranslations } from 'next-intl'

import { Link, usePathname } from '@/i18n/routing'

import RevealCasinoByCharacter from '@/animation/texts/reveal_casino_by_character'

import { routesData } from '@/routes/routes'

import './index.scss'

export default function Routes() {
  const t = useTranslations('ROUTES')
  const pathname = usePathname()

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
            >
              <RevealCasinoByCharacter
                route={route.translationKey}
                isActive={pathname === route.path}
              />
            </Link>
          )
        })}
    </div>
  )
}
