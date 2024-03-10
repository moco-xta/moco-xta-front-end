'use client'

import React, { useState } from 'react'

import { projectsData } from '@/data/projetcsData'

import TextBlockTransitionNine from '@/components/shared/effects/text_block_transition_nine'

import { displayNextTextBlock } from 'animations/textBlockTransitionNine'

import './index.scss'

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
            id={`project_title_${index}`}
            className={'project_title'}
            text={project.title}
            blockIndex={index}
            activeBlock={activeProject}
          />
          <div className='project_details'>
            <TextBlockTransitionNine
              tag={'p'}
              id={`project_description_${index}`}
              className={'project_description'}
              text={project.description}
              blockIndex={index}
              activeBlock={activeProject}
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
