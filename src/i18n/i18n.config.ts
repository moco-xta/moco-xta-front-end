import type { LocalePrefix, Pathnames } from 'next-intl/routing'

import type { TLocale } from '@/types/locales/types'

export const localesConstants = ['en', 'es', 'fr'] as const

export const pathnames: Pathnames<TLocale> = {
  '/': '/',
  '/resources': '/resources',
}

export const localePrefix: LocalePrefix<TLocale> = 'always'
