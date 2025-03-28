import React from 'react'

import type { IProjectData } from '@/types/data/projects/types'

import './index.scss'
import LastProjectCanvas from '@/components/three/canvas/last_project/LastProjectCanvas'

export default function ProjectCard({ index, project }: { index: number; project: IProjectData }) {
  return (
    <a
      id={`last-projects-card-${index}`}
      className='project_card'
    >
      <LastProjectCanvas
        index={index}
        textureUrl={project.imageUrl}
      />
    </a>
  )
}
