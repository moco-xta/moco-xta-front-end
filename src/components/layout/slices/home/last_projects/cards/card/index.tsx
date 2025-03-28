import React from 'react'

import type { IProjectData } from '@/types/data/projects/types'

import useIsSmallScreen from '@/hooks/useIsSmallScreen'

import LastProjectCanvas from '@/components/three/canvas/last_project/LastProjectCanvas'
import LastProjectsRoles from './roles'
import LastProjectsName from './name'

import { isOdd } from '@/helpers/mathHelpers'

import './index.scss'

export default function ProjectCard({
  index,
  project,
  roles,
}: {
  index: number
  project: IProjectData
  roles: string
}) {
  const isSmallScreen = useIsSmallScreen()

  return (
    <a
      id={`last-projects-card-${index}`}
      className='project_card'
    >
      <LastProjectCanvas
        index={index}
        textureUrl={project.imageUrl}
      />
      <div
        className={`last-project-info ${!isSmallScreen ? (!isOdd(index) ? 'last-project-info-left' : 'last-project-info-right') : 'last-project-small-screen'}`}
      >
        <LastProjectsRoles
          index={index}
          roles={roles}
        />
        <LastProjectsName
          index={index}
          name={project.name}
        />
      </div>
    </a>
  )
}
