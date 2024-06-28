import React from 'react'

import { ProjectCardsInterface } from '@/interfaces/new/projectsInterfaces'

import { projectsData } from '@/data/projects/projectsData'

import ProjectCard from './project_card'

import './index.scss'

export default function ProjectCards({ currentProject }: ProjectCardsInterface) {
  return (
    <div id='project_cards'>
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
