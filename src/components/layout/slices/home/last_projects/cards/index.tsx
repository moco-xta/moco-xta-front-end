import React, { useRef } from 'react'

import type { IProjectData } from '@/types/data/projects/types'

import ProjectCard from './card'

import { projectsData } from '@/data/projects/projectsData'

import './index.scss'

export default function LastProjectsCards() {
  const rolesRef = useRef<string[]>([])

  projectsData.forEach((projects: IProjectData) => {
    let sentence = ''
    projects.roles.forEach((role, roleIndex) => {
      sentence += `${roleIndex > 0 ? '· ' : ''}${role}${roleIndex < projects.roles.length - 1 ? '\u00A0' : ''}`
    })
    rolesRef.current.push(sentence)
  })

  return (
    <div id='last-projects-cards'>
      {projectsData.map((project, index) => {
        return (
          <ProjectCard
            key={`last-projects-card-${index}`}
            index={index}
            project={project}
            roles={rolesRef.current[index]}
          />
        )
      })}
    </div>
  )
}
