'use client'

import React from 'react'

import ProjectsCanvas from '@/components/three/canvas/projects/ProjectsCanvas'

import './index.scss'

export default function Projects() {
  return (
    <div id='minecraft_canvas_container'>
      <ProjectsCanvas />
    </div>
  )
}
