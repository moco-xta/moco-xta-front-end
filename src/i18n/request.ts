import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'

import type { TLocales } from 'types/locales/types'

import { localesConstants } from './i18n.config'
import { routing } from './routing'

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale

  if (!locale || !routing.locales.includes(locale as TLocales)) {
    locale = routing.defaultLocale
  }

  return {
    locale,
    messages: (await import(`../translations/${locale}.json`)).default,
  }
})
