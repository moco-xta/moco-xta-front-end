import React, { forwardRef } from 'react'
import { useTranslations } from 'next-intl'

import { ProjectsCardInterface } from '@/interfaces/data/projectsDataInterface'

import './index.scss'

export const LastProjectCard = forwardRef<
  HTMLDivElement,
  ProjectsCardInterface
>(({ content }, ref) => {
  const t = useTranslations('HOME')

  return (
    <div
      ref={ref}
      className='last_project_card'
    >
      <div className='project_card_background'>
        <p className='project_role'>{content.role}</p>
      </div>
      <div className='project_card_content'>
        <h3 className='project_title'>{content.name}</h3>

        <div className='project_details_content'>
          <p className='project_description'>{t(content.descriptionKey)}</p>
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
      </div>
    </div>
  )
})
