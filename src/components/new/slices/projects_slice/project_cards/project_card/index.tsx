import React from 'react'
import { useTranslations } from 'next-intl'

import { ProjectCardInterface } from '@/interfaces/new/projectsInterfaces'

import './index.scss'

export default function ProjectCard({
  index,
  currentProject,
  projectData,
}: ProjectCardInterface) {
  const t = useTranslations('PROJECTS')

  return (
    <div
      key={`project_card_${index}`}
      className={`transition ${index === currentProject ? 'intersecting_project' : 'not_intersecting_project'} project_card`}
      style={{ backgroundColor: projectData.backgroundColor.card }}
    >
      <div>Left</div>
      <div>Right</div>
    </div>
  )
}
