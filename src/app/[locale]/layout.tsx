import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NextIntlClientProvider, useMessages } from 'next-intl'

import ReduxProvider from '@/redux/ReduxProvider'

import Header from '@/components/shared/header'

import Notification from '@/utils/Notification'

import '@/styles/globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MOCO.xta',
  description: "Moco's portfolio",
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  const translations = useMessages()

  return (
    <>
      <html lang={locale}>
        <body className={inter.className}>
          <ReduxProvider>
            <NextIntlClientProvider
              locale={locale}
              messages={translations}
            >
              <Notification />
              <Header />
              {children}
            </NextIntlClientProvider>
          </ReduxProvider>
        </body>
      </html>
    </>
  )
}
