import { useEffect, useState } from 'react'
import { useLenis } from 'lenis/react'

import type { TCompanyData, TProjectData } from '@/types/data/components/layout/types'

import { getDifferenceBetweenTwoDatesInDays } from '@/helpers/dateHelpers'

export default function useProjectsTimeline(projectsData: TProjectData[], companiesAndSchoolData: TCompanyData[]) {
  const [y, setY] = useState<number>(0)
  const [offsetHeight, setOffsetHeight] = useState<number>(0)
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

  useLenis((lenis) => {
    setY(lenis.targetScroll)
    setOffsetHeight(
      document.getElementById('projects_timeline_container')?.offsetHeight! -
        document.documentElement.clientHeight,
    )
  })

  useEffect(() => {
    if (offsetHeight) setDeltaPerDay(offsetHeight / daysDifference)
  }, [offsetHeight, daysDifference])

  useEffect(() => {
    const daysScrolled = Math.round(y / deltaPerDay)
    const updatedDate = new Date()
    updatedDate.setDate(updatedDate.getDate() - daysScrolled)
    setCurrentDate(updatedDate)
  }, [y, deltaPerDay])

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
    companiesAndSchoolData.forEach((companyOrSchool, index) => {
      if (
        currentDate.getTime() > new Date(companyOrSchool.dates.from).getTime() &&
        currentDate.getTime() < new Date(companyOrSchool.dates.to).getTime()
      )
      setCurrentCompany(index)
    })
  }, [currentDate, companiesAndSchoolData])

  return { currentDate, currentProject, currentCompany }
}
