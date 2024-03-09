import React from 'react'

import ProjectSlice from '@/components/slices/projects_slice'

import './index.scss'

export default function Projects() {
  return (
    <div id='projects'>
      <div id='projects_content'>
        <ProjectSlice />
      </div>
    </div>
  )
}
