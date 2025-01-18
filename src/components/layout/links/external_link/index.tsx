import React from 'react'
import { LuExternalLink } from 'react-icons/lu'

import type { TExternalLinkData } from '@/types/data/components/layout/types'

import { Link } from '@/i18n/routing'

import './index.scss'

export default function ExternalLink({ urlName, url }: TExternalLinkData) {
  return (
    <Link
      id='external_link'
      href={url}
      target='_blank'
    >
      {urlName ? urlName : url}
      <LuExternalLink />
    </Link>
  )
}
