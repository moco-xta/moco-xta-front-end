import React from 'react'

import { ProjectsContainerInterface } from '@/interfaces/components/projectsContainerInterface'

import { LastProjectsCard } from '@/components/cards/last_projects_card'

import './index.scss'

export default function ProjectsContainer({
  projectsRefs,
  projectsData,
}: ProjectsContainerInterface) {
  return (
    <div id='projects_container'>
      {projectsRefs.map(({ ref }, index) => (
        <LastProjectsCard
          ref={ref}
          key={`projects_card_${index}`}
          content={projectsData[index]}
        />
      ))}
    </div>
  )
}
