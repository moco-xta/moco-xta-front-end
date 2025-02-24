import React, { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

import { SectionTitle } from '../../titles'

import { capitalizeFirstLetter } from '@/helpers/textHelpers'
import { getRandomInt } from '@/helpers/mathHelpers'

import './index.scss'

export default function PhotographyPage() {
  const t = useTranslations('PHOTOGRAHY')

  const [backgroundIndex, setBackgroundIndex] = useState<number>(null!)

  const backgrounds = ['nec_pluribus_impar', 'robuste', 'rose_rouge', 'verbal_shoota']

  useEffect(() => {
    setBackgroundIndex(getRandomInt({ min: 0, max: backgrounds.length - 1 }))
  }, [backgrounds.length])

  return (
    <section
      id='photography_page'
      style={{ backgroundImage: `url('/img/backgrounds/${backgrounds[backgroundIndex]}.jpg')` }}
    >
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
