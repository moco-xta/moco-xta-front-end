import React from 'react'
import { useTranslations } from 'next-intl'
import { FaArrowRight } from 'react-icons/fa'

import { GSAPTimelineProvider } from '@/contexts/GsapTimelineContext'

import RubiksCubeCanvas from '@/components/three/canvas/rubiks_cube/RubiksCubeCanvas'

import { timelineDefaultValues } from '@/data/skills/timelineData'

import './index.scss'
import { capitalizeFirstLetter } from '@/helpers/textHelpers'

export default function Introduction() {
  const t = useTranslations('SKILLS')

  return (
    <GSAPTimelineProvider {...timelineDefaultValues}>
      <div id='skills_introduction_slice'>
        <RubiksCubeCanvas />
        <div id='skills_introduction'>
          <div id='skills_title_container'>
            <h1 id={'skills_title'}>{capitalizeFirstLetter(t('PAGE_TITLE'))}</h1>
            <FaArrowRight id='skills_title_arrow' />
          </div>
          <div id='skills_introduction_text'>
            {t.rich('PAGE_INTRODUCTION', {
              p: (chunk) => <p className='parapgraph'>{chunk}</p>,
            })}
          </div>
        </div>
      </div>
    </GSAPTimelineProvider>
  )
}
