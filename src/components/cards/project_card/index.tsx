import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { FaExternalLinkAlt } from 'react-icons/fa'

import { ProjectCardInterface } from '@/interfaces/r3fInterfaces'

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
      <div>
        <a
          className='project_name_and_external_link_container'
          href={projectData.url}
          target='_blank'
        >
          <h2>{projectData.name}</h2>
          <FaExternalLinkAlt className='external_link_icon' />
        </a>
        <Image
          className='project_image'
          src={projectData.image}
          width={619}
          height={400}
          alt={`${projectData.key}_image`}
        />
        <div className='project_description'>
          {t(projectData.descriptionsKey)}
        </div>
      </div>
      <div className='tools_container'>
        {projectData.tools.map((ToolLogo, index) => (
          <ToolLogo
            key={`projects_tools_${projectData.key}_${index}`}
            className='tool_logo'
          />
        ))}
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
  )
}
