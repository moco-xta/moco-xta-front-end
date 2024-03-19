'use client'

import React, { forwardRef } from 'react'
import { useTranslations } from 'next-intl'

import { ProjectsCardInterface } from '@/interfaces/projectsDataInterface'

import './index.scss'

export const LastProjectCard = forwardRef<
  HTMLDivElement,
  ProjectsCardInterface
>(({ content }, ref) => {
  const t = useTranslations('HOME')

  return (
    <div
      ref={ref}
      className='last_project_card card_background_gradient'
    >
      <div className='project_card_details'>
        <a
          href={content.url}
          target='_blank'
        >
          <h3 className='project_title'>{content.name}</h3>
        </a>
        <div className='project_tools'>
          {content.tools.map((Logo, index) => (
            <Logo
              key={`last_projects_tools_${content.key}_${index}`}
              className='tool_icon'
            />
          ))}
        </div>
        <div className='project_roles'>
          {content.roles.map((role, index) => (
            <p
              key={`role_${content.key}_${index}`}
              className='role'
            >
              {role}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
})
