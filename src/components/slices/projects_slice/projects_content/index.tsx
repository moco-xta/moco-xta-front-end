'use client'

import React, { useState } from 'react'

import { projectsData } from '@/data/projetcsData'

import TextBlockTransitionNine from '@/components/shared/effects/text_block_transition_nine'

import './index.scss'
import { displayNextTextBlock } from 'animations/textBlockTransitionNine'

export default function ProjectsContent() {
  const [activeProject, setActiveProject] = useState<number>(0)
  const [isAnimating, setIsAnimating] = useState<boolean>(false)

  function displayNextProject() {
    displayNextTextBlock(
      isAnimating,
      setIsAnimating,
      activeProject,
      setActiveProject,
      projectsData.length,
    )
  }

  return (
    <>
      {projectsData.map((project, index) => (
        <div
          key={`project_${index}`}
          id={`project_${index}`}
          className='project'
        >
          <TextBlockTransitionNine
            tag={'h2'}
            id={`project_description_${index}`}
            className={'project_description'}
            text={project.title}
            activeText={activeProject}
            index={index}
          />
          <div className='project_details'>
            <TextBlockTransitionNine
              tag={'p'}
              id={`project_description_${index}`}
              className={'project_description'}
              text={project.description}
              activeText={activeProject}
              index={index}
            />
          </div>
        </div>
      ))}
      <button
        disabled={isAnimating}
        onClick={displayNextProject}
        style={{ color: isAnimating ? 'red' : 'green' }}
      >
        Next project
      </button>
    </>
  )
}
