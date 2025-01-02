import React from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

import type { TChannelsLinks } from '@/types/layout'

import { capitalizeFirstLetter } from '@/helpers/textHelpers'

import './index.scss'

export default function ChannelsLinks({ channels }: TChannelsLinks) {
  const t = useTranslations('LAYOUT.LINKS')

  return (
    <div id='channels_links'>
      <p>{capitalizeFirstLetter(t('CHANNELS'))}</p>
      <dl>
        {channels.map(({ urlName, url, languages, description }) => (
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
