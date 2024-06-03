import React from 'react'

import { ProjectCardInterface } from '@/interfaces/new/projectsInterfaces'

import './index.scss'

export default function ProjectCard({
  index,
  currentProject,
  projectData,
}: ProjectCardInterface) {
  return (
    <div className='project_card'>ProjectCard {index} {currentProject}</div>
  )
}
