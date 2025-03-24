import React from 'react'

import useProjectsTimeline from '@/hooks/useProjectsTimeline'

import ProjectsCanvas from '@/components/three/canvas/new_projects/ProjectsCanvas'
import Content from './content'
import CurrentDate from './current_date'

import { projectsData } from '@/data/projects/projectsData'
import { companiesData } from '@/data/projects/companiesData'

import { isValidDate } from '@/helpers/dateHelpers'

import './index.scss'

export type TProjectsSlice = {
  currentDate: Date
  currentProject: number
  currentCompany: number
}

export default function ProjectsSlice() {
  /* const { currentDate, currentProject, currentCompany } = useProjectsTimeline(
    projectsData,
    companiesData,
  ) */

  /* return (
    <div id='projects_page'>
      <ProjectsCanvas
        currentProject={currentProject}
        currentCompany={currentCompany}
      />
      <Content
        // snapHeights={snapHeights}
        currentProject={currentProject}
        currentCompany={currentCompany}
      />
      {isValidDate(currentDate) && (
        <CurrentDate
          currentProject={currentProject}
          projectsNumber={projectsData.length}
          currentDate={currentDate}
        />
      )}
    </div>
  ) */

  return <ProjectsCanvas />
}
