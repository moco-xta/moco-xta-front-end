'use client'

import React, { createRef, useEffect, useMemo } from 'react'

import { projectsData } from '@/data/projectsData'
import { companiesAndSchollData } from '@/data/companiesAndSchoolData'

import useProjectsTimeline from '@/hooks/useProjectsTimeline'

import { isValidDate } from '@/helpers/dateHelpers'

import CurrentDate from './current_date'
import ProjectsContainer from './projects_container'
import CompaniesOrSchoolContainer from './companies_or_school_container'
import ScrollToTop from '@/components/buttons/scroll_to_top'
import ScrollDown from '../../shared/scroll_down'

import { default as projectsConstants } from '@/constants/projectsConstants.json'

import variables from '@/styles/variables.module.scss'
import './index.scss'

export default function ProjectsSlice() {
  const {
    clientHeight,
    scrollFlow,
    currentProject,
    currentCompanyOrSchool,
    currentDate,
  } = useProjectsTimeline(projectsData, companiesAndSchollData)

  useEffect(() => {
    console.log('currentProject', currentProject)
  }, [currentProject])

  /* const projectsRefs = useMemo(
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
        ref.current.style.top = `${(clientHeight - ref.current?.offsetHeight) / 2 + index * projectsConstants.CARDS_OFFSET.PROJECT}px`
      }
    })
    companiesAndSchoolRefs.forEach(({ ref }, index) => {
      if (ref.current) {
        ref.current.style.top = `${(clientHeight - ref.current?.offsetHeight) / 2 + index * projectsConstants.CARDS_OFFSET.COMPANY_OR_SCHOOL}px`
      }
    })
  }, [clientHeight, projectsRefs, companiesAndSchoolRefs])

  useEffect(() => {
    projectsRefs.forEach(({ ref }) => {
      if (ref.current) {
        ref.current.style.top = `${scrollFlow === 'up' ? parseInt(ref.current.style.top) - projectsConstants.CARDS_OFFSET.PROJECT : parseInt(ref.current.style.top) + projectsConstants.CARDS_OFFSET.PROJECT}px`
      }
    })
    // eslint-disable-next-line
  }, [currentProject, projectsRefs])

  useEffect(() => {
    companiesAndSchoolRefs.forEach(({ ref }) => {
      if (ref.current) {
        ref.current.style.top = `${scrollFlow === 'up' ? parseInt(ref.current.style.top) - projectsConstants.CARDS_OFFSET.COMPANY_OR_SCHOOL : parseInt(ref.current.style.top) + projectsConstants.CARDS_OFFSET.COMPANY_OR_SCHOOL}px`
      }
    })
    // eslint-disable-next-line
  }, [currentCompanyOrSchool, companiesAndSchoolRefs]) */

  return (
    <div id='project_timeline_container'>
      <section id='project_slice'>
        {projectsData.map((project, index) => {
          return (
            <div key={`project_card_${index}`} className={`transition ${index === currentProject ? 'intersecting' : 'not_intersecting'} project_card`}>
              Project {index}
            </div>
          )
        })}
        {/* <CompaniesOrSchoolContainer
          companiesAndSchoolRefs={companiesAndSchoolRefs}
          companiesAndSchollData={companiesAndSchollData}
          currentCompanyOrSchool={currentCompanyOrSchool}
        />
        <ProjectsContainer
          projectsRefs={projectsRefs}
          projectsData={projectsData}
          currentProject={currentProject}
        /> */}
        {isValidDate(currentDate) && <CurrentDate currentDate={currentDate} />}
        <ScrollDown
          top={'65vh'}
          color={variables.grey_05}
        />
      </section>
      <div className='scroll_to_top_container'>
        <ScrollToTop />
      </div>
    </div>
  )
}
