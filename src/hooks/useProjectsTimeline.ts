import { useEffect, useState } from 'react'
import useLenisScroll from '@/hooks/useLenisScroll'

import { getDifferenceBetweenTwoDatesInDays } from '@/helpers/dateHelpers'

import { TProjectData } from '@/types/data/components/layout/types'

export default function useProjectsTimeline(projectsData: TProjectData[]) {
  const { y, offsetHeight } = useLenisScroll()

  const [currentDate, setCurrentDate] = useState<Date>(new Date())
  const [daysDifference] = useState<number>(
    getDifferenceBetweenTwoDatesInDays(
      new Date(),
      new Date(projectsData[projectsData.length - 1].dates.from),
    ),
  )
  const [deltaPerDay, setDeltaPerDay] = useState<number>(0)

  useEffect(() => {
    if (offsetHeight) setDeltaPerDay(offsetHeight / daysDifference)
  }, [offsetHeight, daysDifference])

  useEffect(() => {
    const daysScrolled = Math.round(y / deltaPerDay)
    const updatedDate = new Date()
    updatedDate.setDate(updatedDate.getDate() - daysScrolled)
    setCurrentDate(updatedDate)
  }, [y, deltaPerDay])

  return { currentDate }
}
