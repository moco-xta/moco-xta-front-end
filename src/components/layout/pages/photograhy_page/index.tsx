import React from 'react'
import { useTranslations } from 'next-intl'

import { SectionTitle } from '../../titles'

import { capitalizeFirstLetter } from '@/helpers/textHelpers'

import './index.scss'

export default function PhotographyPage() {
  const t = useTranslations('PHOTOGRAHY')

  return (
    <section id='photography_page'>
      <div className='photography_page_introduction'>
        <SectionTitle title={capitalizeFirstLetter(t('TITLE'))} />
        <div className='photography_page_introduction_text'>
          {t.rich('INTRODUCTION', {
            p: (chunk) => <p>{chunk}</p>,
          })}
        </div>
      </div>
    </section>
  )
}
