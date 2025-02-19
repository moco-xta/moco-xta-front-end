import moment from 'moment'

import type {
  TCompanyData,
  TLocationData,
  TProjectData,
} from '@/types/data/components/layout/types'

export function getDifferenceBetweenTwoDatesInDays(dateTo: Date, dateFrom: Date): number {
  const difference_in_days = Math.round(
    (dateTo.getTime() - dateFrom.getTime()) / (1000 * 3600 * 24),
  )
  return difference_in_days
}

export function isValidDate(date: Date) {
  if (Object.prototype.toString.call(date) === '[object Date]') {
    if (isNaN(date.getTime())) {
      return false
    } else {
      return true
    }
  }
  return false
}

export function getKeyDates(data: [TProjectData[], TCompanyData[], TLocationData[]]): number[] {
  const dates: string[] = []
  data.forEach((dataArray) => {
    dataArray.forEach((item/* , index */) => {
      dates.push(item.dates.from)
    })
  })
  return getDaysBetweenDates(sortDates(removeDuplicateDates(dates)))
}

function removeDuplicateDates(dates: string[]): string[] {
  const uniqueDateStrings: string[] = [moment(new Date()).format('YYYY-MM-DD')]
  const seenDates: { [key: string]: boolean } = {}

  dates.forEach((date) => {
    if (!seenDates[date]) {
      seenDates[date] = true
      uniqueDateStrings.push(date)
    }
  })

  return uniqueDateStrings
}

function sortDates(dates: string[]): string[] {
  dates.slice().sort()
  return dates.reverse()
}

export function getDaysBetweenDates(dates: string[]): number[] {
  const daysBetween = []

  for (let i = 1; i < dates.length; i++) {
    const date1 = new Date(dates[i - 1])
    const date2 = new Date(dates[i])

    const timeDifference = getDifferenceBetweenTwoDatesInDays(new Date(date2), new Date(date1))

    daysBetween.push(timeDifference)
  }

  return daysBetween
}

export function getSnapHeights(keyDates: number[], deltaPerDay: number): number[] {
  const snapHeights: number[] = []
  keyDates.forEach((keyDate) => {
    snapHeights.push(keyDate * deltaPerDay)
  })
  return snapHeights
}
