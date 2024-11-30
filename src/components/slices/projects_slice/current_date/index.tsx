import React from 'react'
import moment from 'moment'
import { FaArrowLeft } from 'react-icons/fa6'
import { useLocale, useTranslations } from 'next-intl'

import { TimelineInterface } from '@/interfaces/projectsInterfaces'

import './index.scss'

export default function CurrentDate({ currentDate }: TimelineInterface) {
  const locale = useLocale()
  const t = useTranslations('PROJECTS')

  return (
    <div id='current_date'>
      {locale === 'en' ? (
        <>
          <p id='month'>{t(`MONTH.${moment(currentDate).format('MMM').toUpperCase()}`)}</p>
          <p id='day_number'>{moment(currentDate).format('Do')}</p>
        </>
      ) : (
        <>
          <p id='day_number'>{moment(currentDate).format('DD')}</p>
          <p id='month'>{t(`MONTH.${moment(currentDate).format('MMM').toUpperCase()}`)}</p>
        </>
      )}
      <div id='arrow_and_year_container'>
        <FaArrowLeft id='arrow_left_icon' />
        <p id='year'>{moment(currentDate).format('YYYY')}</p>
      </div>
    </div>
  )
}
