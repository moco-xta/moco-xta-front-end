import { defineRouting } from 'next-intl/routing'
import { createNavigation } from 'next-intl/navigation'

import { localesConstants } from './i18n.config'

export const routing = defineRouting({
  locales: localesConstants,
  defaultLocale: localesConstants[2],
  localePrefix: 'never',
})

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing)
