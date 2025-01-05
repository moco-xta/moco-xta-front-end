import React from 'react'
import { useTranslations } from 'next-intl'

import type { TPageIntroduction } from '@/types/layout'

import { PageTitle } from '../../titles'

import './index.scss'

export default function PageIntroduction({ key, translationPath }: TPageIntroduction) {
  const t = useTranslations()

  return (
    <section
      id={`${key}_introduction`}
      className='pc_item page_introduction'
    >
      <PageTitle translationPath={`${translationPath}.PAGE_TITLE`} />
      <p className='pc_item pi_introduction'>{t(`${translationPath}.PAGE_INTRODUCTION`)}</p>
    </section>
  )
}
