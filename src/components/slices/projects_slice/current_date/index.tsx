import React from 'react'
import moment from 'moment'

import { TimelineInterface } from '@/interfaces/components/timelineInterface'

import './index.scss'

export default function CurrentDate({ currentDate }: TimelineInterface) {
  return <>{moment(currentDate).format('dd-DD-MM-YYYY')}</>
}
