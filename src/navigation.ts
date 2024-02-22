import {
  createLocalizedPathnamesNavigation,
  Pathnames,
} from 'next-intl/navigation'


export const locales = ['en', 'es', 'fr']
export const localePrefix = 'nerver'

export const pathnames = {
  '/': '/',
  '/about': {
    en: '/about',
    es: '/ueber-uns',
    fr: '/ueber-uns',
  },
  '/blog': '/blog',
  '/contact': {
    en: '/contact',
    es: '/contacto',
    fr: '/contact',
  },
  '/photography': {
    en: '/photography',
    es: '/fotografia',
    fr: '/photographie',
  },
  '/projects': {
    en: '/projects',
    es: '/proyectos',
    fr: '/projets',
  },
  '/skills': {
    en: '/skills',
    es: '/habilitades',
    fr: '/competences',
  },
} satisfies Pathnames<typeof locales>

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, pathnames })
