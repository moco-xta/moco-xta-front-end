import React from 'react'

import { ProjectsCanvas } from '@/components/three/canvas'
import Content from './content'

import './index.scss'

export default function ProjectsPage() {
  return (
    <>
      <div id='projects_canvas'>
        <ProjectsCanvas />
      </div>
      <Content />
    </>
  )
}
