'use client'

import React, { createRef, useEffect, useMemo } from 'react'

import { projectsData } from '@/data/projetcsData'

import './index.scss'

export default function ProjectSlice() {

  const projectsRefs = useMemo(
    () =>
      projectsData.map(() => ({
        ref: createRef<HTMLParagraphElement>(),
      })),
    [],
  )

  useEffect(() => {
    console.log(projectsRefs)
  }, [])

  return (
    <div>
      <h1>Title</h1>
      {projectsRefs.map(({ ref }, index) => (
        <p key={`project_description_${index}`} ref={ref}>{projectsData[index].description}</p>
      ))}
    </div>
  )
}
