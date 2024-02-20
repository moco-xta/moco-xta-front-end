import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'

const locales = ['en', 'es', 'fr']

interface RequestConfigInterface {
  locale: string
}

export default getRequestConfig(async ({ locale }: RequestConfigInterface) => {
  if (!locales.includes(locale as any)) {
    console.log(locale)
    alert('NOT FOUND')
    notFound()
  }

  return {
    messages: (await import(`./translations/${locale}.json`)).default,
  }
})
