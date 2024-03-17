import React from 'react'

import { projectsData } from '@/data/projectsData'

import { LastProjectCard } from '@/components/cards/last_project_card'

import './index.scss'

export default function LastProjectsCards() {
  return (
    <div id='last_projects_cards_container'>
      <div id='last_projects_cards_wrapper'>
        {projectsData
          .filter((_, index) => index < 3)
          .map((project, index) => (
            <LastProjectCard
              key={`last_projects_card_${index}`}
              content={project}
            />
          ))}
      </div>
    </div>
  )
}
