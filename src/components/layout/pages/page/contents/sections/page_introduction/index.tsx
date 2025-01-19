import React from 'react'
import { useTranslations } from 'next-intl'

import type { TPageIntroduction } from '@/types/components/layout/types'

import { PageTitle } from '@/components/layout/titles'

import './index.scss'

export default function PageIntroduction({ prefixKey, translationPath }: TPageIntroduction) {
  const t = useTranslations()

  return (
    <section
      id={`${prefixKey}_introduction`}
      className='pc_item page_introduction'
    >
      <PageTitle translationPath={`${translationPath}.PAGE_TITLE`} />
      <p className='pc_item pi_introduction'>
        {t.rich(`${translationPath}.PAGE_INTRODUCTION`, {
          p: (chunk) => <p>{chunk}</p>,
        })}
      </p>
    </section>
  )
}
