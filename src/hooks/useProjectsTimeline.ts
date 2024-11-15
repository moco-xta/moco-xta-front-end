import { useEffect, useState } from 'react'

import { ProjectDataInterface } from '@/interfaces/dataInterfaces'

import useLenisScroll from '@/hooks/useLenisScroll'

import { getDifferenceBetweenTwoDatesInDays } from '@/helpers/dateHelpers'

export default function useProjectsTimeline(projectsData: ProjectDataInterface[]) {
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
    setCurrentDate(new Date(new Date().setDate(new Date().getDate() - Math.round(y / deltaPerDay))))
  }, [y, deltaPerDay])

  return { currentDate }
}
