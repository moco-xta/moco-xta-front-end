import React from 'react'

import { ProjectsContainerInterface } from '@/interfaces/componentsInterfaces'

import ProjectCard from '@/components/cards/project_card'

export default function ProjectCards({
  projectsData,
  currentProject,
}: ProjectsContainerInterface) {
  return (
    <>
      {projectsData.map((projectData, index) => {
        return <ProjectCard index={index} currentProject={currentProject} projectData={projectData} />
      })}
    </>
  )
}
