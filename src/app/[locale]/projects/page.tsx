import React from 'react'

import ProjectCanvas from '@/components/r3f/canvas/projects_canvas'

import './index.scss'

export default function Projects() {
  return (
    <div id='projects_container'>
      <div id='projects_scene_container'>
        <ProjectCanvas />
      </div>
    </div>
  )
}
