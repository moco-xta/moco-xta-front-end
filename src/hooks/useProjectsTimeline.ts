import { useEffect, useState } from 'react'

import { CompanyOrSchollDataInterface, ProjectDataInterface } from '@/interfaces/dataInterfaces'

import useLenisScroll from '@/hooks/useLenisScroll'

import { getDifferenceBetweenTwoDatesInDays } from '@/helpers/dateHelpers'

export default function useProjectsTimeline(
  projectsData: ProjectDataInterface[],
  companiesAndSchoolData: CompanyOrSchollDataInterface[],
) {
  const { y, offsetHeight } = useLenisScroll()

  const [currentDate, setCurrentDate] = useState<Date>(new Date())
  const [daysDifference] = useState<number>(
    getDifferenceBetweenTwoDatesInDays(
      new Date(),
      new Date(projectsData[projectsData.length - 1].dates.from),
    ),
  )
  const [deltaPerDay, setDeltaPerDay] = useState<number>(0)
  const [currentProject, setCurrentProject] = useState<number>(0)
  const [currentCompanyOrSchool, setCurrentCompanyOrSchool] = useState<number>(0)

  useEffect(() => {
    if (offsetHeight) setDeltaPerDay(offsetHeight / daysDifference)
  }, [offsetHeight, daysDifference])

  useEffect(() => {
    setCurrentDate(new Date(new Date().setDate(new Date().getDate() - Math.round(y / deltaPerDay))))
  }, [y, deltaPerDay])

  useEffect(() => {
    projectsData.forEach((project, index) => {
      if (
        currentDate.getTime() > new Date(project.dates.from).getTime() &&
        currentDate.getTime() < new Date(project.dates.to).getTime()
      )
        setCurrentProject(index)
    })
    companiesAndSchoolData.forEach((companyOrSchool, index) => {
      if (
        currentDate.getTime() > new Date(companyOrSchool.dates.from).getTime() &&
        currentDate.getTime() < new Date(companyOrSchool.dates.to).getTime()
      )
        setCurrentCompanyOrSchool(index)
    })
  }, [currentDate, projectsData, companiesAndSchoolData])

  return { currentDate, currentProject, currentCompanyOrSchool }
}
