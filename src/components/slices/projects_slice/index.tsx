import React from 'react'

import ProjectsContent from './projects_content'
import ProjectCanvas from '@/components/r3f/canvas/projects_canvas'

import './index.scss'

export default function ProjectsSlice() {
  return (
    <>
      <div id='projects_content'>
        <ProjectsContent />
      </div>
      <div id='projects_canvas'>
        <ProjectCanvas />
      </div>
    </>
  )
}
