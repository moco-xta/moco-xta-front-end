import React from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

import type { TDocumentationLinks } from '@/types/layout'

import { capitalizeFirstLetter } from '@/helpers/textHelpers'

import './index.scss'

export default function DocumentationLinks({ documentation }: TDocumentationLinks) {
  const t = useTranslations('LAYOUT.LINKS')

  return (
    <div id='documentation_links'>
      <p>{capitalizeFirstLetter(t('DOCUMENTATION'))}</p>
      <dl>
        {documentation.map(({ urlName, url, languages, description }) => (
          <>
            <dt>
              <Link
                id='external_link'
                href={url}
                target='_blank'
              >
                {urlName}
              </Link>
            </dt>
            <dd className='channel_description'>- "{description}"</dd>
          </>
        ))}
      </dl>
    </div>
  )
}
