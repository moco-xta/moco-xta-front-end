import React from 'react'

import type { TProjectScene } from '@/types/components/three/types'

import ProjectsLogos from './ProjectsLogos'
import CompaniesLogos from './CompaniesLogos'
import ProjectsPictures from './ProjectsPictures'
import ToolsLogosGroups from './ToolsLogosGroups'

export default function ProjectsScene({ currentProject, currentCompany }: TProjectScene) {
  return (
    <>
      <ProjectsLogos currentProject={currentProject} />
      <CompaniesLogos currentCompany={currentCompany} />
      <ProjectsPictures currentProject={currentProject} />
      <ToolsLogosGroups currentProject={currentProject} />
    </>
  )
}
