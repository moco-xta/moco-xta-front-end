import type { Metadata } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import { Toaster } from 'sonner'

import ReduxProvider from '@/redux/ReduxProvider'

import Header from '@/components/new/shared/header'

import '@/styles/new/globals.scss'

const inter = Inter({ subsets: ['latin'] })

const karmaticArcade = localFont({
  src: '../../fonts/ttf/karmatic_arcade.ttf',
  variable: '--font-karmatic-arcade',
})

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
        <body className={`${inter.className} ${karmaticArcade.variable}`}>
          <GoogleAnalytics
            gaId={`${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <ReduxProvider>
            <NextIntlClientProvider
              locale={locale}
              messages={translations}
            >
              <Toaster
                toastOptions={{
                  unstyled: true,
                  duration: 50000,
                  classNames: {
                    loading: 'toaster toaster_loading',
                    success: 'toaster toaster_success',
                    error: 'toaster toaster_error',
                  },
                }}
              />
              <Header />
              {children}
            </NextIntlClientProvider>
          </ReduxProvider>
        </body>
      </html>
    </>
  )
}
