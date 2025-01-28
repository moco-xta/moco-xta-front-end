import React from 'react'

import { ProjectsCanvas } from '@/components/three/canvas'
import Content from './content'
import CurrentDate from './current_date'

import useProjectsTimeline from '@/hooks/useProjectsTimeline'

import { isValidDate } from '@/helpers/dateHelpers'

import { projectsData } from '@/data/projects/projectsData'
import { companiesData } from '@/data/projects/companiesData'
// import { locationsData } from '@/data/projects/locationsData'

import './index.scss'

export default function ProjectsPage() {
  const { /* snapHeights, */ currentDate, currentProject, currentCompany /* , currentLocation */ } =
    useProjectsTimeline(projectsData, companiesData /* , locationsData */)

  return (
    <div id='projects_page'>
      <div id='projects_canvas'>
        <ProjectsCanvas
          currentProject={currentProject}
          currentCompany={currentCompany}
          // currentLocation={currentLocation}
        />
      </div>
      <Content
        // snapHeights={snapHeights}
        currentProject={currentProject}
        currentCompany={currentCompany}
      />
      {isValidDate(currentDate) && <CurrentDate currentDate={currentDate} />}
    </div>
  )
}
