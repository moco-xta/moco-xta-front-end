'use client'

import React from 'react'

import ProjectsSlice from '@/components/slices/projects_slice'
import ProjectsCanvas from '@/components/three/canvas/projects/ProjectsCanvas'

import './index.scss'

export default function Projects() {
  return (
    <>
      <ProjectsSlice />
      <div
        id='minecraft_canvas_container'
        className='projects_canvas_zIndex'
      >
        <ProjectsCanvas />
      </div>
    </>
  )
}
