'use client'

import React, { createRef, useEffect, useMemo } from 'react'

import { projectsData } from '@/data/projectsData'
import { companiesAndSchollData } from '@/data/companiesAndSchoolData'

import useProjectsTimeline from '@/hooks/useProjectsTimeline'

import { isValidDate } from '@/helpers/dateHelpers'

import CurrentDate from './current_date'
import ProjectsContainer from './projects_container'
import ScrollToTop from '@/components/buttons/scroll_to_top'

import { default as ProjectsConstants } from '@/constants/projectsConstants.json'

import './index.scss'
import CompaniesOrSchoolContainer from './companies_or_school_container'

export default function ProjectsSlice() {
  const {
    clientHeight,
    scrollFlow,
    currentProject,
    currentCompanyOrSchool,
    currentDate,
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
      if (ref.current) {
        ref.current.style.top = `${(clientHeight - ref.current?.offsetHeight) / 2 + index * ProjectsConstants.CARDS_OFFSET.PROJECT}px`
      }
    })
    companiesAndSchoolRefs.forEach(({ ref }, index) => {
      if (ref.current) {
        console.log('')
        ref.current.style.top = `${(clientHeight - ref.current?.offsetHeight) / 2 + index * ProjectsConstants.CARDS_OFFSET.COMPANY_OR_SCHOOL}px`
      }
    })
  }, [clientHeight])

  useEffect(() => {
    projectsRefs.forEach(({ ref }) => {
      if (ref.current) {
        ref.current.style.top = `${scrollFlow === 'up' ? parseInt(ref.current.style.top) - ProjectsConstants.CARDS_OFFSET.PROJECT : parseInt(ref.current.style.top) + ProjectsConstants.CARDS_OFFSET.PROJECT}px`
      }
    })
  }, [currentProject])

  useEffect(() => {
    companiesAndSchoolRefs.forEach(({ ref }) => {
      if (ref.current) {
        ref.current.style.top = `${scrollFlow === 'up' ? parseInt(ref.current.style.top) - ProjectsConstants.CARDS_OFFSET.COMPANY_OR_SCHOOL : parseInt(ref.current.style.top) + ProjectsConstants.CARDS_OFFSET.COMPANY_OR_SCHOOL}px`
      }
    })
  }, [currentCompanyOrSchool])

  return (
    <>
      <div id='project_slice'>
        <ProjectsContainer
          projectsRefs={projectsRefs}
          projectsData={projectsData}
        />
        <CompaniesOrSchoolContainer
          companiesAndSchoolRefs={companiesAndSchoolRefs}
          companiesAndSchollData={companiesAndSchollData}
        />
        {isValidDate(currentDate) && <CurrentDate currentDate={currentDate} />}
      </div>
      <div className='scroll_to_top_container'>
        <ScrollToTop />
      </div>
    </>
  )
}
