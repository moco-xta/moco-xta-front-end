import React from 'react'
import Link from 'next/link'
import { FaYoutube } from 'react-icons/fa'
import { useTranslations } from 'next-intl'

import type { TExternalLink } from '@/types/components/layout/types'

import { capitalizeFirstLetter } from '@/helpers/textHelpers'

import './index.scss'

export default function YoutubePlaylistLink({ url }: TExternalLink) {
  const t = useTranslations('LAYOUT.LINKS')

  return (
    <Link
      id='youtube_playlist_link'
      href={url}
      target='_blank'
    >
      {capitalizeFirstLetter(t('MY_PLAYLIST'))}
      <FaYoutube />
    </Link>
  )
}
