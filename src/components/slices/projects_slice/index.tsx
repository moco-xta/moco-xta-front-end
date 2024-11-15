import React from 'react'

import useProjectsTimeline from '@/hooks/useProjectsTimeline'

import { projectsData } from '@/data/projects/projectsData'
import { companiesAndSchoolData } from '@/data/projects/companiesAndSchoolData'

import CurrentDate from './current_date'

import { isValidDate } from '@/helpers/dateHelpers'

import './index.scss'

export default function ProjectsSlice() {
  const { currentDate, currentProject, currentCompanyOrSchool } = useProjectsTimeline(
    projectsData,
    companiesAndSchoolData,
  )

  return (
    <div
      id='projects_timeline_container'
      style={{ height: `${projectsData.length}00vh` }}
    >
      <section
        id='projects_slice'
        className='fullscreen'
      >
        <p>Project: {currentProject}</p>
        <p>Company or school: {currentCompanyOrSchool}</p>
        {isValidDate(currentDate) && <CurrentDate currentDate={currentDate} />}
      </section>
    </div>
  )
}
