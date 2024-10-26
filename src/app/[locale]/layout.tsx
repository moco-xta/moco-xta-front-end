import type { Metadata } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Inter } from 'next/font/google'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import { Toaster } from 'sonner'
import { ReactLenis } from 'lenis/react'

import ReduxProvider from '@/redux/ReduxProvider'

import Header from '@/components/shared/header'

import '@/styles/globals.scss'
import { gilroyBlackFont } from '@/assets/fonts/ttf'

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
            //easing: (x: number) => x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2,
            duration: 1.2,
            smoothWheel: true,
            touchMultiplier: 2,
          }}
        >
          <body className={`${interFont.className} ${gilroyBlackFont.variable}`}>
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
                <Header />
                {children}
              </NextIntlClientProvider>
            </ReduxProvider>
          </body>
        </ReactLenis>
      </html>
    </>
  )
}
