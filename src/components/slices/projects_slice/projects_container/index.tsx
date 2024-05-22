import React from 'react'

import { ProjectsContainerInterface } from '@/interfaces/componentsInterfaces'

import ProjectCard from '@/components/cards/project_card'

import './index.scss'

export default function ProjectCards({
  projectsData,
  currentProject,
}: ProjectsContainerInterface) {
  return (
    <div id='project_cards_container'>
      {projectsData.map((projectData, index) => {
        return (
          <ProjectCard
            key={`project_card_${index}`}
            index={index}
            currentProject={currentProject}
            projectData={projectData}
          />
        )
      })}
    </div>
  )
}
