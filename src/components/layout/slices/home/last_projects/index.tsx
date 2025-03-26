import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { useTranslations } from 'next-intl'

import LastProjectCanvas from '@/components/three/canvas/last_project/LastProjectCanvas'

import { projectsData } from '@/data/projects/projectsData'

import './index.scss'

export default function LastProjects() {
  const t = useTranslations('HOME.LAST_PROJECTS')

  return (
    <section id='last-projects-section'>
      <p className='section_title'>{t('SECTION_TITLE')}</p>
      <div id='projects-grid'>
        {projectsData.map((project, index) => {
          if (index < 6) {
            return (
              <div
                key={`last_project_${project.key}`}
                id={`last-project-canvas-container-${index}`}
                className='last-project'
              >
                <LastProjectCanvas
                  index={index}
                  textureUrl={project.imageUrl}
                />
                <div className='last-project-info'>
                  <p className='last-project-roles'>
                    {project.roles.map((role) => (
                      <span key={role}>{role}</span>
                    ))}
                  </p>
                  <p className='last-project-name'>
                    <FaArrowRight />
                    {project.name}
                  </p>
                </div>
              </div>
            )
          }
          return null
        })}
      </div>
    </section>
  )
}
