import React from 'react'
import { useTranslations } from 'next-intl'

import type { TPageIntroduction } from '@/types/components/layout/types'

import { PageTitle } from '@/components/layout/titles'

import './index.scss'

export default function PageIntroduction({ translationPath }: TPageIntroduction) {
  const t = useTranslations()

  return (
    <section
      id='introduction_section'
      className='pc_item page_introduction'
    >
      <PageTitle translationPath={`${translationPath}.PAGE_TITLE`} />
      <div className='pc_item pi_introduction'>
        {t.rich(`${translationPath}.PAGE_INTRODUCTION`, {
          p: (chunk) => <p className='paragraph_translation'>{chunk}</p>,
        })}
      </div>
    </section>
  )
}
