import { getRequestConfig } from 'next-intl/server'

import type { TLocales } from 'types/locales/types'

import { redirect, routing } from './routing'

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale

  if (!locale || !routing.locales.includes(locale as TLocales)) {
    redirect({ href: '/', locale: 'en' })
  }

  return {
    locale,
    messages: (await import(`../translations/${locale}.json`)).default,
  }
})
