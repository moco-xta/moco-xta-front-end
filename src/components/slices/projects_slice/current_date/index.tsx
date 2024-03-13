import React from 'react'
import moment from 'moment'
import { useLocale, useTranslations } from 'next-intl'

import { TimelineInterface } from '@/interfaces/components/timelineInterface'

import './index.scss'

export default function CurrentDate({ currentDate }: TimelineInterface) {
  const locale = useLocale()
  const t = useTranslations('PROJECTS')

  console.log(currentDate)

  return (
    <div id='current_date_container'>
      <p id='day_of_the_week'>
        {t(
          `DAYS_OF_THE_WEEK.${moment(currentDate).format('ddd').toUpperCase()}`,
        )}
      </p>
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
      <p id='year'>{moment(currentDate).format('YYYY')}</p>
    </div>
  )
}
