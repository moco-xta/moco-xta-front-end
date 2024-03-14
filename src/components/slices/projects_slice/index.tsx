'use client'

import React, { createRef, useEffect, useMemo } from 'react'

import { projectsData } from '@/data/projectsData'
import { companiesAndSchollData } from '@/data/companiesAndSchoolData'

import useProjectsTimeline from '@/hooks/useProjectsTimeline'

import { isValidDate } from '@/helpers/dateHelpers'

import CurrentDate from './current_date'
import { LastProjectsCard } from '@/components/cards/last_projects_card'
import { CompanyOrSchoolCard } from '@/components/cards/company_or_school_card'

import './index.scss'

export default function ProjectsSlice() {
  const {
    scrollFlow,
    currentProject,
    currentCompanyOrSchool,
    currentDate,
    dataLoaded,
  } = useProjectsTimeline(projectsData, companiesAndSchollData)

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
    projectsRefs.forEach(({ ref }, index) => {
      if (ref.current) ref.current.style.top = `${(index + 1) * 400}px`
    })
    companiesAndSchoolRefs.forEach(({ ref }, index) => {
      if (ref.current) ref.current.style.top = `${(index + 1) * 400}px`
    })
  }, [dataLoaded])

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
