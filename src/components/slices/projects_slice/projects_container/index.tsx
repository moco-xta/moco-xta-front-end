import React from 'react'

import { ProjectsContainerInterface } from '@/interfaces/components/projectsContainerInterface'

import { ProjectCard } from '@/components/cards/project_card'

import './index.scss'

export default function ProjectsContainer({
  projectsRefs,
  projectsData,
  currentProject,
}: ProjectsContainerInterface) {
  return (
    <div id='projects_container'>
      {projectsRefs.map(({ ref }, index) => (
        <ProjectCard
          ref={ref}
          key={`projects_card_${index}`}
          content={projectsData[index]}
          index={index}
          currentProject={currentProject}
        />
      ))}
    </div>
  )
}
