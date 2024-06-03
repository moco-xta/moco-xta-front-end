import { useEffect, useState } from 'react'

import useScroll from '@/hooks/useScroll'

import {
  CompanyOrSchollDataInterface,
  ProjectDataInterface,
} from '@/interfaces/dataInterfaces'

import { getDifferenceBetweenTwoDatesInDays } from '@/helpers/dateHelpers'

export default function useProjectsTimeline(
  projectsData: ProjectDataInterface[],
  companiesAndSchollData: CompanyOrSchollDataInterface[],
) {
  const { y, offsetHeight, clientHeight } = useScroll()

  const [currentProject, setCurrentProject] = useState<number>(0)
  const [currentCompanyOrSchool, setCurrentCompanyOrSchool] =
    useState<number>(0)
  const [currentDate, setCurrentDate] = useState<Date>(new Date())
  const [daysDifference] = useState<number>(
    getDifferenceBetweenTwoDatesInDays(
      new Date(),
      new Date(projectsData[projectsData.length - 1].dates.from),
    ),
  )
  const [deltaPerDay, setDeltaPerDay] = useState<number>(0)

  useEffect(() => {
    if (offsetHeight && clientHeight) {
      setCurrentDate(new Date())
      setDeltaPerDay((offsetHeight - clientHeight) / daysDifference)
    }
  }, [offsetHeight, clientHeight, daysDifference])

  useEffect(() => {
    const differenceBetweenTodayAndCurrentDate = Math.round(y / deltaPerDay)
    setCurrentDate(
      new Date(
        new Date().setDate(
          new Date().getDate() - differenceBetweenTodayAndCurrentDate,
        ),
      ),
    )
  }, [y, deltaPerDay])

  useEffect(() => {
    projectsData.forEach((project, index) => {
      if (
        currentDate.getTime() > new Date(project.dates.from).getTime() &&
        currentDate.getTime() < new Date(project.dates.to).getTime()
      )
        setCurrentProject(index)
    })
    companiesAndSchollData.forEach((companyOrSchool, index) => {
      if (
        currentDate.getTime() >
          new Date(companyOrSchool.dates.from).getTime() &&
        currentDate.getTime() < new Date(companyOrSchool.dates.to).getTime()
      )
        setCurrentCompanyOrSchool(index)
    })
  }, [currentDate, projectsData, companiesAndSchollData])

  return {
    currentProject,
    currentCompanyOrSchool,
    currentDate,
  }
}
