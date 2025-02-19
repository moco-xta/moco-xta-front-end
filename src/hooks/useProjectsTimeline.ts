import { useEffect, /* useMemo, */ useState } from 'react'
import { useLenis } from 'lenis/react'

import type {
  TCompanyData,
  // TLocationData,
  TProjectData,
} from '@/types/data/components/layout/types'

import {
  getDifferenceBetweenTwoDatesInDays /* , getKeyDates, getSnapHeights */,
} from '@/helpers/dateHelpers'

export default function useProjectsTimeline(
  projectsData: TProjectData[],
  companiesData: TCompanyData[],
  // locationsData: TLocationData[],
) {
  // const keyDates = useMemo(() => getKeyDates([projectsData, companiesData, locationsData]), [projectsData, companiesData, locationsData]);

  // const [snapHeights, setSnapHeights] = useState<number[]>([])
  const [y, setY] = useState<number>(0)
  const [offsetHeight] = useState<number>(
    projectsData.length * 1.5 * window.innerHeight - window.innerHeight,
  )
  const [currentDate, setCurrentDate] = useState<Date>(new Date())
  const [daysDifference] = useState<number>(
    getDifferenceBetweenTwoDatesInDays(
      new Date(),
      new Date(projectsData[projectsData.length - 1].dates.from),
    ),
  )
  const [deltaPerDay, setDeltaPerDay] = useState<number>(0)
  const [currentProject, setCurrentProject] = useState<number>(0)
  const [currentCompany, setCurrentCompany] = useState<number>(0)
  // const [currentLocation, setCurrentLocation] = useState<number>(0)

  useLenis((lenis) => {
    setY(lenis.targetScroll)
    /* const container = document.getElementById('projects_timeline_container')

    if (container) {
      setOffsetHeight(container.offsetHeight - document.documentElement.clientHeight)
    } else {
      setOffsetHeight(0)
    } */
  }) // TODO: Check if I still have the scrolling issue

  useEffect(() => {
    setDeltaPerDay(offsetHeight / daysDifference)
  }, [offsetHeight, daysDifference])

  useEffect(() => {
    const daysScrolled = Math.round(y / deltaPerDay)
    const updatedDate = new Date()
    updatedDate.setDate(updatedDate.getDate() - daysScrolled)
    setCurrentDate(updatedDate)

    // setSnapHeights(getSnapHeights(keyDates, deltaPerDay))
  }, [y, deltaPerDay /* , keyDates */])

  useEffect(() => {
    projectsData.forEach((project, index) => {
      if (
        currentDate.getTime() > new Date(project.dates.from).getTime() &&
        currentDate.getTime() < new Date(project.dates.to).getTime()
      )
        setCurrentProject(index)
    })
  }, [currentDate, projectsData])

  useEffect(() => {
    companiesData.forEach((companyData, index) => {
      if (
        currentDate.getTime() > new Date(companyData.dates.from).getTime() &&
        currentDate.getTime() < new Date(companyData.dates.to).getTime()
      )
        setCurrentCompany(index)
    })
  }, [currentDate, companiesData])

  /* useEffect(() => {
    locationsData.forEach((locationData, index) => {
      if (
        currentDate.getTime() > new Date(locationData.dates.from).getTime() &&
        currentDate.getTime() < new Date(locationData.dates.to).getTime()
      )
        setCurrentLocation(index)
    })
  }, [currentDate, locationsData]) */

  return { /* snapHeights, */ currentDate, currentProject, currentCompany /* , currentLocation */ }
}
