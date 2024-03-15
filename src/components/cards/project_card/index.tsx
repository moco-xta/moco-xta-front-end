import React, { forwardRef } from 'react'

import { ProjectsCardInterface } from '@/interfaces/data/projectsDataInterface'

import './index.scss'

export const ProjectCard = forwardRef<HTMLDivElement, ProjectsCardInterface>(
  ({ content }, ref) => {
    return (
      <div
        ref={ref}
        className='project_card'
      >
        <h3>{content.name}</h3>
        <img
          className='last_projects_img'
          src={content.picture.deskstop}
          alt=''
        />
        <p>{content.descriptionKey}</p>
        <div>
          <p>{content.dates.from}</p>
          <p>{content.dates.to}</p>
        </div>
        <div>
          {content.tools.map((Logo, index) => (
            <Logo key={`last_projects_tools_${content.key}_${index}`} />
          ))}
        </div>
      </div>
    )
  },
)
