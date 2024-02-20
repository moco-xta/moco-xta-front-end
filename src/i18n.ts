import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'

import { default as LocalesConstants } from '@/constants/localesConstants.json'

interface RequestConfigInterface {
  locale: string
}

export default getRequestConfig(async ({ locale }: RequestConfigInterface) => {
  if (!LocalesConstants.LOCALES.includes(locale as any)) {
    notFound()
  }

  return {
    messages: (await import(`./translations/${locale}.json`)).default,
  }
})
