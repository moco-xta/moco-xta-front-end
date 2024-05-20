'use client'

import React from 'react'

import { projectsData } from '@/data/projects/projectsData'
import { companiesAndSchollData } from '@/data/projects/companiesAndSchoolData'

import useProjectsTimeline from '@/hooks/useProjectsTimeline'

import { isValidDate } from '@/helpers/dateHelpers'

import CurrentDate from './current_date'
import ProjectsCards from './projects_container'
import CompanyOrSchoolCards from './companies_or_school_container'
import ScrollToTop from '@/components/buttons/scroll_to_top'
import ScrollDown from '../../shared/scroll_down'

import variables from '@/styles/variables.module.scss'
import './index.scss'

export default function ProjectsSlice() {
  const { currentProject, currentCompanyOrSchool, currentDate } =
    useProjectsTimeline(projectsData, companiesAndSchollData)

  return (
    <div id='project_timeline_container'>
      <section
        id='project_slice'
        style={{
          backgroundColor: projectsData[currentProject].backgroundColor.page,
        }}
      >
        <ProjectsCards
          projectsData={projectsData}
          currentProject={currentProject}
        />
        <CompanyOrSchoolCards
          companiesAndSchollData={companiesAndSchollData}
          currentCompanyOrSchool={currentCompanyOrSchool}
          projectsData={projectsData}
          currentProject={currentProject}
        />
        {isValidDate(currentDate) && (
          <CurrentDate
            currentDate={currentDate}
            currentProject={currentProject}
            projectsData={projectsData}
          />
        )}
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
