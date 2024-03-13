import React from 'react'

import { projectsData } from '@/data/projectsData'

import { LastProjectsCard } from '@/components/cards/last_projects_card'

import './index.scss'

export default function LastProjectsSlice() {
  return (
    <div id='last_projects_slice'>
      <div id='last_projects_content'>
        <div id='last_projects_container'>
          {projectsData.map((project, index) => (
            <LastProjectsCard
              key={`last_projects_card_${index}`}
              content={project}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
