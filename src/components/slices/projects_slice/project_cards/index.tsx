import React from 'react'

import { ProjectsContainerInterface } from '@/interfaces/componentsInterfaces'

import { ProjectCard } from '@/components/cards/project_card'

import './index.scss'

export default function ProjectCards({
  projectsData,
  currentProject,
}: ProjectsContainerInterface) {
  return (
    <>
      {projectsData.map((project, index) => {
        return (
          <div
            key={`project_card_${index}`}
            className={`transition ${index === currentProject ? 'intersecting_project' : 'not_intersecting_project'} project_card`}
          >
            Project {index}
          </div>
        )
      })}
    </>
  )
}
