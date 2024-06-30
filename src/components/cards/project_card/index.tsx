import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { FaExternalLinkAlt } from 'react-icons/fa'

import { ProjectCardInterface } from '@/interfaces/r3fInterfaces'

import './index.scss'
import useResize from '@/hooks/useResize'

export default function ProjectCard({ index, currentProject, projectData }: ProjectCardInterface) {
  const t = useTranslations('PROJECTS')

  const [projectImageRatio, setProjectImageRatio] = useState<number>(1)

  const { innerWidth, innerHeight } = useResize()

  useEffect(() => {
    const getPictureRatio = () => {
      if (innerWidth > 1366) return 1
      else if (innerWidth > 1280) return 0.85
      else return 0.7
    }
    setProjectImageRatio(getPictureRatio())
  }, [innerWidth])

  return (
    <div
      key={`project_card_${index}`}
      className={`transition ${index === currentProject ? 'intersecting_project' : 'not_intersecting_project'} project_card`}
      style={{
        backgroundColor: projectData.backgroundColor.card,
      }}
    >
      <div className='project_card_left_panel'>
        <div className='name_image_description_project'>
          <a
            className='project_name'
            href={projectData.url}
            target='_blank'
          >
            <h2>{projectData.name}</h2>
          </a>
          <Image
            className='project_image'
            src={projectData.image}
            width={619 * projectImageRatio}
            height={400 * projectImageRatio}
            alt={`${projectData.key}_image`}
          />
          <div className='project_description'>{t(projectData.descriptionsKey)}</div>
        </div>
        <div className='roles_container'>
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
      <div className='tools_container'>
        {projectData.tools.map((picture, index) => (
          <Image
            key={`projects_tools_${projectData.key}_${index}`}
            className='tool_logo'
            src={picture}
            width={200}
            height={200}
            alt={''}
          />
        ))}
      </div>
    </div>
  )
}
