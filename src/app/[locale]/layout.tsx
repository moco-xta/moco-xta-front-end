import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'

import './globals.css'

export const metadata: Metadata = {
  title: "Moco's portfolio - Federico Desmoulin",
  description: '', // TODO: Make a description
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = await getLocale()

  const translations = await getMessages()

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={translations}>{children}</NextIntlClientProvider>
      </body>
    </html>
  )
}
