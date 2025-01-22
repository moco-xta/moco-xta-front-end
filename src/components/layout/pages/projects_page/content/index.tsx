import React from 'react'

import { capitalizeFirstLetter } from '@/helpers/textHelpers'

import { projectsData } from '@/data/projects/projectsData'

import './index.scss'

export default function Content() {
  return (
    <div
      id='projects_content'
      style={{ height: `${projectsData.length}00vh` }}
    >
      {/* {projectsData.map((projectData) => (
        <section
          key={`project_section_${projectData.name}`}
          className='project_section'
          style={{ background: projectData.backgroundColor.page }}
        >
          <h2>{capitalizeFirstLetter(projectData.name)}</h2>
        </section>
      ))} */}
      Content
    </div>
  )
}
