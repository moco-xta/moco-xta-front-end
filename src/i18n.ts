import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'

import { default as LocalesConstants } from '@/constants/locales/localesConstants.json'

interface RequestConfigInterface {
  locale: string
}

export default getRequestConfig(async ({ locale }: RequestConfigInterface) => {
  const baseLocale = new Intl.Locale(locale).baseName
  if (!LocalesConstants.LOCALES.includes(baseLocale)) {
    notFound()
  }

  return {
    messages: (await import(`./translations/${baseLocale}.json`)).default,
  }
})
