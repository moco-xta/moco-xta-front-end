import createMiddleware from 'next-intl/middleware'

import { default as LocalesConstants } from '@/constants/localesConstants.json'

export default createMiddleware({
  locales: LocalesConstants.LOCALES,
  defaultLocale: LocalesConstants.LOCALES[0],
  localePrefix: 'never',
})

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}

// TODO: https://www.reddit.com/r/nextjs/comments/161v9ob/comment/jxu5jxe/
// Generate middleware to avoid "en|es|fr" in matcher
