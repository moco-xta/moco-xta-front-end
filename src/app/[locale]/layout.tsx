import type { Metadata } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Inter } from 'next/font/google'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import { Toaster } from 'sonner'
import { ReactLenis } from 'lenis/react'

import ReduxProvider from '@/redux/ReduxProvider'

import Cursor from '@/components/cursor'
import Header from '@/components/shared/header'

import '@/styles/globals.scss'
import {
  gilroyBlackFont,
  gilroyBoldFont,
  gilroyHeavyFont,
  sansTrialRegularFont,
} from '@/assets/fonts/ttf'
import Menu from '@/components/shared/menu'

const interFont = Inter({
  subsets: ['latin'],
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
  params: {
    locale: string
  }
}>) {
  const translations = useMessages()

  return (
    <>
      <html lang={locale}>
        <ReactLenis
          root
          options={{
            lerp: 0.1,
            duration: 1.2,
            smoothWheel: true,
            touchMultiplier: 2,
          }}
        >
          <body
            className={`${interFont.className} ${gilroyBlackFont.variable} ${gilroyBoldFont.variable} ${gilroyHeavyFont.variable} ${sansTrialRegularFont.variable}`}
          >
            <GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
            <ReduxProvider>
              <NextIntlClientProvider
                locale={locale}
                messages={translations}
              >
                <Toaster
                  toastOptions={{
                    unstyled: true,
                    duration: 2000,
                    classNames: {
                      loading: 'toaster toaster_loading',
                      success: 'toaster toaster_success',
                      error: 'toaster toaster_error',
                    },
                  }}
                />
                <Cursor />
                {/* <Header /> */}
                <Menu />
                {children}
              </NextIntlClientProvider>
            </ReduxProvider>
          </body>
        </ReactLenis>
      </html>
    </>
  )
}
