import React from 'react'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa6'
import { useTranslations } from 'next-intl'

import { InternalLinkInterface } from '@/interfaces/components/buttons/internalLinkInterface'

import { Routes } from '@/routes/routes'

import './index.scss'

export default function InternalLink({
  routeKey,
  translationKey,
}: InternalLinkInterface) {
  const t = useTranslations()

  return (
    <Link
      className='internal_link'
      href={Routes.find((route) => route.key === routeKey)!.path}
    >
      <span className='internal_link_text'>{t(translationKey)}</span>
      <FaArrowRight />
    </Link>
  )
}
