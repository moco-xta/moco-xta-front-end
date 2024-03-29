import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import { Toaster } from 'sonner'

import ReduxProvider from '@/redux/ReduxProvider'

import Header from '@/components/shared/header'

import '@/styles/globals.scss'
import { IsClientContextProvider } from 'contexts/IsClientContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Moco.xta',
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
          {/* <IsClientContextProvider> */}
          <ReduxProvider>
            <NextIntlClientProvider
              locale={locale}
              messages={translations}
            >
              <Toaster />
              <Header />
              {children}
            </NextIntlClientProvider>
          </ReduxProvider>
          {/* </IsClientContextProvider> */}
        </body>
      </html>
    </>
  )
}
