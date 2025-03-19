import React from 'react'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'
import { useTranslations } from 'next-intl'

import { projectsData } from '@/data/projects/projectsData'

import './index.scss'

export default function LastProjects() {
  const t = useTranslations('HOME.LAST_PROJECTS')

  return (
    <section id='last_projects_section'>
      <p className='section_title'>{t('SECTION_TITLE')}</p>

      <div id='projects_wrapper'>
        {projectsData.map((project) => (
          <div className='project'>
            <Image
              src={project.imageUrl}
              width={600}
              height={400}
              alt={project.key}
              className='projects_img'
            />
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
        ))}
      </div>
    </section>
  )
}
