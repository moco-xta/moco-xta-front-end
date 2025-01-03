import React from 'react'
import { useTranslations } from 'next-intl'

import type { TLinksArray } from '@/types/layout'

import YoutubePlaylistLink from '../youtube_playlist_link'
import ExternalLink from '../external_link'

import { capitalizeFirstLetter } from '@/helpers/textHelpers'

import './index.scss'

export default function LinksArray({
  translationPathPrefix,
  title,
  links,
  youtubePlaylistlink,
}: TLinksArray) {
  const t = useTranslations()

  return (
    <table id='links_array'>
      <caption>
        {capitalizeFirstLetter(t(`RESOURCES.${title}`))}
        {youtubePlaylistlink && <YoutubePlaylistLink url={youtubePlaylistlink} />}
      </caption>
      {links.map(({ translationKey, urlName, url, languages }) => (
        <tr>
          <th className='links_array_link'>
            <ExternalLink
              urlName={urlName}
              url={url}
              languages={languages}
            />
          </th>
          <th className='links_array_description'>
            {t(`${translationPathPrefix}.LINKS.${translationKey}.DESCRIPTION`)}
          </th>
        </tr>
      ))}
    </table>
  )
}
