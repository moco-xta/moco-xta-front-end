'use client'

import React from 'react'

import { projectsData } from '@/data/projectsData'
import { companiesAndSchollData } from '@/data/companiesAndSchoolData'

import useProjectsTimeline from '@/hooks/useProjectsTimeline'

import { isValidDate } from '@/helpers/dateHelpers'

import CurrentDate from './current_date'
import ProjectsCards from './project_cards'
import CompanyOrSchoolCards from './company_or_school_cards'
import ScrollToTop from '@/components/buttons/scroll_to_top'
import ScrollDown from '../../shared/scroll_down'

import variables from '@/styles/variables.module.scss'
import './index.scss'

export default function ProjectsSlice() {
  const { currentProject, currentCompanyOrSchool, currentDate } =
    useProjectsTimeline(projectsData, companiesAndSchollData)

  return (
    <div id='project_timeline_container'>
      <section id='project_slice'>
        <ProjectsCards
          projectsData={projectsData}
          currentProject={currentProject}
        />
        <CompanyOrSchoolCards
          companiesAndSchollData={companiesAndSchollData}
          currentCompanyOrSchool={currentCompanyOrSchool}
        />
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
