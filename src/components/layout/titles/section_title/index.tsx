import React from 'react'
import { useTranslations } from 'next-intl'
import { LuExternalLink } from 'react-icons/lu'

import type { TTitle } from '@/types/components/layout/types'

import { Link } from '@/i18n/routing'

import { capitalizeFirstLetter } from '@/helpers/textHelpers'

import './index.scss'

export default function SectionTitle({ title, translationPath, url }: TTitle) {
  const t = useTranslations()

  return (
    <>
      {!url ? (
        <h2
          id='section_title'
          className='pc_item'
        >
          {capitalizeFirstLetter(title ? title : t(translationPath))}
        </h2>
      ) : (
        <Link
          className='project_link'
          href={url}
          target='_blank'
        >
          <h2
            id='section_title'
            className='pc_item'
          >
            {capitalizeFirstLetter(title ? title : t(translationPath))}
          </h2>
          <LuExternalLink />
        </Link>
      )}
    </>
  )
}
