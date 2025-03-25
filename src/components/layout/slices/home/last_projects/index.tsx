import React from 'react'
// import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'
import { useTranslations } from 'next-intl'

import { projectsData } from '@/data/projects/projectsData'

import './index.scss'
import LastProjectCanvas from '@/components/three/canvas/last_project/LastProjectCanvas'

export default function LastProjects() {
  const t = useTranslations('HOME.LAST_PROJECTS')

  return (
    <section id='last-projects-section'>
      {/* <p className='section_title'>{t('SECTION_TITLE')}</p> */}

      <div id='projects-grid'>
        {projectsData.map((project, index) => {
          if (index < 6) {
            return (
              <div
                key={`last_project_${project.key}`}
                className='last-project'
              >
                <LastProjectCanvas />
                <p>
                  {project.roles.map((role) => (
                    <span key={role}>{role}</span>
                  ))}
                </p>
                <p>
                  <FaArrowRight />
                  {project.name}
                </p>
              </div>
            )
          }
          })}
      </div>
    </section>
  )
}
