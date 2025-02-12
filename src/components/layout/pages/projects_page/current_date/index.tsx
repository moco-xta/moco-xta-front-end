import React from 'react'
import moment from 'moment'
import { FaArrowLeft } from 'react-icons/fa6'
import { useLocale, useTranslations } from 'next-intl'

import type { TCurrentDate } from '@/types/components/layout/types'

import './index.scss'
import { helveticaNeueBlackFont } from '@/app/fonts/otf'
import { helveticaFont } from '@/app/fonts/ttf'

export default function CurrentDate({ currentProject, projectsNumber, currentDate }: TCurrentDate) {
  const locale = useLocale()
  const t = useTranslations('PROJECTS')

  return (
    <div
      id='current_date'
      className={`${helveticaNeueBlackFont.className}`}
    >
      {locale === 'en' ? (
        <>
          <p id='month'>{t(`MONTH.${moment(currentDate).format('MMM').toUpperCase()}`)}</p>
          <p
            id='day_number'
            style={{ marginBottom: '-20px' }}
          >
            {moment(currentDate).format('Do')}
          </p>
        </>
      ) : (
        <>
          <p
            id='day_number'
            style={{ marginBottom: '-28px' }}
          >
            {moment(currentDate).format('DD')}
          </p>
          <p id='month'>{t(`MONTH.${moment(currentDate).format('MMM').toUpperCase()}`)}</p>
        </>
      )}
      <div id='arrow_and_year_container'>
        <FaArrowLeft id='arrow_left_icon' />
        <p id='year'>{moment(currentDate).format('YYYY')}</p>
      </div>
      <div
        id='tracker'
        className={helveticaFont.className}
      >
        {currentProject + 1}/{projectsNumber}
      </div>
    </div>
  )
}
