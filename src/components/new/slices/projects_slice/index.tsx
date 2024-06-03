import React from 'react'

import useProjectsTimeline from '@/hooks/new/useProjectsTimeline'

import { projectsData } from '@/data/projects/projectsData'
import { companiesAndSchollData } from '@/data/projects/companiesAndSchoolData'

import ProjectCards from './project_cards'
import CurrentDate from './current_date'

import { isValidDate } from '@/helpers/new/dateHelpers'

import './index.scss'

export default function ProjectsSlice() {
  const { currentProject, currentCompanyOrSchool, currentDate } =
    useProjectsTimeline(projectsData, companiesAndSchollData)

  return (
    <div id='project_timeline_container'>
      <section
        id='project_slice'
        /* style={{
          backgroundColor: projectsData[currentProject].backgroundColor.page,
        }} */
        className='responsive_background'
      >
        <ProjectCards />
        {isValidDate(currentDate) && (
          <CurrentDate
            currentDate={currentDate}
            currentProject={currentProject}
            projectsData={projectsData}
          />
        )}
      </section>
    </div>
  )
}
