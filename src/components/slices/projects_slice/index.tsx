'use client'

import React, { createRef, useEffect, useMemo, useState } from 'react'

import { projectsData } from '@/data/projectsData'
import { companiesAndSchollData } from '@/data/companiesAndSchoolData'

import useScroll from '@/hooks/useScroll'

import { getDifferenceBetweenTwoDatesInDays, isValidDate } from '@/helpers/dateHelpers'

/* import ProjectsContent from './projects_content' */
/* import ProjectCanvas from '@/components/r3f/canvas/projects_canvas' */
import CurrentDate from './current_date'
import { LastProjectsCard } from '@/components/cards/last_projects_card'
import { CompanyOrSchoolCard } from '@/components/cards/company_or_school_card'

import './index.scss'

export default function ProjectsSlice() {
  const { y, offsetHeight, clientHeight, scrollFlow } = useScroll()

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

  const projectsRefs = useMemo(
    () =>
      projectsData.map(() => ({
        ref: createRef<HTMLDivElement>(),
      })),
    [],
  )
  const companiesAndSchoolRefs = useMemo(
    () =>
      companiesAndSchollData.map(() => ({
        ref: createRef<HTMLDivElement>(),
      })),
    [],
  )

  useEffect(() => {
    if (offsetHeight && clientHeight) {
      setCurrentDate(new Date())
      setDeltaPerDay((offsetHeight - clientHeight) / daysDifference)

      projectsRefs.forEach(({ ref }, index) => {
        if (ref.current) ref.current.style.top = `${(index + 1) * 400}px`
      })
      companiesAndSchoolRefs.forEach(({ ref }, index) => {
        if (ref.current) ref.current.style.top = `${(index + 1) * 400}px`
      })
    }
  }, [offsetHeight, clientHeight])

  useEffect(() => {
    const differenceBetweenTodayAndCurrentDate = Math.round(y / deltaPerDay)
    setCurrentDate(
      new Date(
        new Date().setDate(
          new Date().getDate() - differenceBetweenTodayAndCurrentDate,
        ),
      ),
    )
  }, [y])

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
  }, [currentDate])

  useEffect(() => {
    projectsRefs.forEach(({ ref }) => {
      if (ref.current) {
        ref.current.style.top = `${scrollFlow === 'up' ? parseInt(ref.current.style.top) - 400 : parseInt(ref.current.style.top) + 400}px`
      }
    })
  }, [currentProject])

  useEffect(() => {
    companiesAndSchoolRefs.forEach(({ ref }) => {
      if (ref.current) {
        ref.current.style.top = `${scrollFlow === 'up' ? parseInt(ref.current.style.top) - 400 : parseInt(ref.current.style.top) + 400}px`
      }
    })
  }, [currentCompanyOrSchool])

  return (
    <>
      <div id='project_slice'>
        <div id='timeline_container'>
          {isValidDate(currentDate) && (
            <CurrentDate currentDate={currentDate} />
          )}
        </div>
        <div id='projects_container'>
          {projectsRefs.map(({ ref }, index) => (
            <LastProjectsCard
              ref={ref}
              key={`projects_card_${index}`}
              content={projectsData[index]}
            />
          ))}
        </div>
        <div id='companies_and_school_container'>
          {companiesAndSchoolRefs.map(({ ref }, index) => (
            <CompanyOrSchoolCard
              ref={ref}
              key={`company_or_school_card_${index}`}
              content={companiesAndSchollData[index]}
            />
          ))}
        </div>
      </div>
    </>
  )
}
