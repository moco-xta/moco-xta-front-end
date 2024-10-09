import React from 'react'

import useProjectsTimeline from '@/hooks/useProjectsTimeline'

import { projectsData } from '@/data/projects/projectsData'
import { companiesAndSchoolData } from '@/data/projects/companiesAndSchoolData'

import ProjectCards from './project_cards'
import CompanyOrSchoolCards from './company_or_school_cards'
import CurrentDate from './current_date'

import { isValidDate } from '@/helpers/dateHelpers'

import './index.scss'

export default function ProjectsSlice() {
  const { currentProject, currentCompanyOrSchool, currentDate } = useProjectsTimeline(
    projectsData,
    companiesAndSchoolData,
  )

  return (
    <div id='project_timeline_container'>
      <section
        id='project_slice'
        style={{
          backgroundColor: projectsData[currentProject].backgroundColor.page,
        }}
        /* className='responsive_background' */
      >
        {/* <ProjectCards currentProject={currentProject} />
        <CompanyOrSchoolCards
          currentCompanyOrSchool={currentCompanyOrSchool}
          currentProject={currentProject}
        /> */}


        



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
