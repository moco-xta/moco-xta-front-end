import React from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTranslations } from 'next-intl'
import { FaYoutube } from 'react-icons/fa'

import type { TPageIntroduction } from '@/types/components/layout/types'

import { usePathname } from '@/i18n/routing'

import { PageTitle } from '@/components/layout/titles'

import './index.scss'

export default function PageIntroduction({ translationPath }: TPageIntroduction) {
  const t = useTranslations()
  const pathname = usePathname()

  useGSAP(() => {
    gsap.from('.pi_introduction', {
      duration: 1,
      background: 'rgba(64, 64, 64, 0)',
      delay: 2,
    })
  })

  return (
    <section
      id='introduction_section'
      className='pc_item page_introduction'
    >
      <PageTitle translationPath={`${translationPath}.PAGE_TITLE`} />
      <div className='pc_item pi_introduction'>
        {t.rich(`${translationPath}.PAGE_INTRODUCTION`, {
          p: (chunk) => <p className='pc_item paragraph_translation'>{chunk}</p>,
        })}
        {pathname === '/skills' &&
          t.rich(`${translationPath}.HOME_MADE`, {
            p: (chunk) => <p className='pc_item home_made'>{chunk}</p>,
          })}
      </div>
      {pathname === '/resources' && (
        <div
          id='youtube_playlist_disclamer'
          className='pc_item'
        >
          <span>
            <FaYoutube />
          </span>
          <p>{t('RESOURCES.YOUTUBE_PLAYLISTS_DISCLAMER')}</p>
        </div>
      )}
    </section>
  )
}
