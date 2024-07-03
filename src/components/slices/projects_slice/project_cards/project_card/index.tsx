import React from 'react'
import { useTranslations } from 'next-intl'

import { ProjectCardInterface } from '@/interfaces/projectsInterfaces'

import './index.scss'

export default function ProjectCard({ index, currentProject, projectData }: ProjectCardInterface) {
  const t = useTranslations('PROJECTS')

  return (
    <div
      key={`project_card_${index}`}
      className={`project_card transition ${index === currentProject ? 'intersecting_project' : 'not_intersecting_project'}`}
      style={{
        backgroundColor: projectData.backgroundColor.card,
      }}
    >
      <div className='project_card_left_panel'>
        <div>
          <a
            href={projectData.url}
            target='_blank'
          >
            <h2>{projectData.name}</h2>
          </a>
          <img
            className='home_page_img'
            src={projectData.image}
            width={619}
            height={400}
            alt={`${projectData.key}_image`}
          />
          <div className='project_description'>{t(projectData.descriptionsKey)}</div>
        </div>
        <div className='roles'>
          {projectData.roles.map((role, index) => (
            <p
              key={`role_${projectData.key}_${index}`}
              className='role'
            >
              {role}
            </p>
          ))}
        </div>
      </div>
      <div>Right</div>
    </div>
  )
}
