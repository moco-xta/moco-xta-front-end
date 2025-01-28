import React from 'react'

import type { TProjectScene } from '@/types/components/layout/types'

import ProjectsLogos from './ProjectsLogos'
import CompaniesLogos from './CompaniesLogos'
import ProjectsPictures from './ProjectsPictures'
import ToolsLogosGroups from './ToolsLogosGroups'
import Map from './Map'
// import Locations from './Locations'

export default function ProjectsScene({
  currentProject,
  currentCompany,
  // currentLocation,
}: TProjectScene) {
  return (
    <>
      <ProjectsLogos currentProject={currentProject} />
      <CompaniesLogos currentCompany={currentCompany} />
      <ProjectsPictures currentProject={currentProject} />
      <ToolsLogosGroups currentProject={currentProject} />
      {/* <Locations currentLocation={currentLocation} /> */}
      <Map />
    </>
  )
}
