import React from 'react'

import { ProjectsCanvas } from '@/components/three/canvas'
import Content from './content'
import CurrentDate from './current_date'

import useProjectsTimeline from '@/hooks/useProjectsTimeline'

import { isValidDate } from '@/helpers/dateHelpers'

import { projectsData } from '@/data/projects/projectsData'

import './index.scss'

export default function ProjectsPage() {
  const { currentDate, currentProject } = useProjectsTimeline(projectsData)

  return (
    <div id='projects_page'>
      <div id='projects_canvas'>
        <ProjectsCanvas />
      </div>
      <Content currentProject={currentProject} />
      {isValidDate(currentDate) && <CurrentDate currentDate={currentDate} />}
    </div>
  )
}
