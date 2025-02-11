import React from 'react'
import { useTranslations } from 'next-intl'

import type { TLinksArray } from '@/types/components/layout/types'
import type { TExternalLinkData } from '@/types/data/components/layout/types'

import YoutubePlaylistLink from '../youtube_playlist_link'
import ExternalLink from '../external_link'

import { capitalizeFirstLetter } from '@/helpers/textHelpers'

import './index.scss'

export default function LinksArray({
  translationPath,
  title,
  links,
  youtubePlaylistLink,
}: TLinksArray) {
  const t = useTranslations()

  return (
    <table
      id='links_array'
      className='pc_item'
    >
      <caption>
        {capitalizeFirstLetter(t(`RESOURCES.${title}`))}
        {youtubePlaylistLink && <YoutubePlaylistLink url={youtubePlaylistLink.url} />}
      </caption>
      <tbody>
        {links.map(({ translationKey, urlName, url, languages }: TExternalLinkData) => (
          <tr key={`external_link_${urlName}`}>
            <td className='links_array_link'>
              <ExternalLink
                urlName={urlName}
                url={url}
                languages={languages}
              />
            </td>
            <td className='links_array_description'>
              {t(`${translationPath}.LINKS.${translationKey}.DESCRIPTION`)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
