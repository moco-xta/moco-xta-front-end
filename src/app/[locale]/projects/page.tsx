'use client'

import React from 'react'

import useProjectsTimeline from '@/hooks/useProjectsTimeline'

import ProjectsCanvas from '@/components/three/canvas/laboratory/LaboratoryCanvas'
import ProjectsSlice from '@/components/layout/slices/projects'

import { projectsData } from '@/data/projects/projectsData'
import { companiesData } from '@/data/projects/companiesData'

import './index.scss'

export default function Projects() {
  const { currentDate, currentProject, currentCompany } = useProjectsTimeline(
    projectsData,
    companiesData,
  )

  return (
    <div id='projects_page'>
      <div id='projects_canvas'>
        {/* <ProjectsCanvas
          currentProject={currentProject}
          currentCompany={currentCompany}
          // currentLocation={currentLocation}
        /> */}
      </div>
      <ProjectsSlice
        currentDate={currentDate}
        currentProject={currentProject}
        currentCompany={currentCompany}
      />
    </div>
  )
}
