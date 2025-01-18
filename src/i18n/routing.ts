import { defineRouting } from 'next-intl/routing'
import { createNavigation } from 'next-intl/navigation'

import { localePrefix, localesConstants, pathnames } from './i18n.config'

export const routing = defineRouting({
  locales: localesConstants,
  pathnames: pathnames,
  defaultLocale: localesConstants[0],
  localePrefix: localePrefix,
})

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing)
