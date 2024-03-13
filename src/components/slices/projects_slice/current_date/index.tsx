import React from 'react'
import moment from 'moment'

import { TimelineInterface } from '@/interfaces/components/timelineInterface'

import './index.scss'

export default function CurrentDate({ currentDate }: TimelineInterface) {
  return (
    <div id='current_date_container'>
      <p id='day_of_the_week'>{moment(currentDate).format('ddd')}</p>
      <p id='month'>{moment(currentDate).format('MMMM')}</p>
      <p id='day_number'>{moment(currentDate).format('Do')}</p>
      <p id='year'>{moment(currentDate).format('YYYY')}</p>
    </div>
  )
}
