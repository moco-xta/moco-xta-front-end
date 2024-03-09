'use client'

import React, { useState } from 'react'
import gsap from 'gsap'

import { projectsData } from '@/data/projetcsData'

import TextBlockTransitionNine from '@/components/shared/effects/text_block_transition_nine'

import './index.scss'

export default function ProjectsContent() {
  const [activeProject, setActiveProject] = useState<number>(0)
  const [isAnimating, setIsAnimating] = useState<boolean>(false)

  function displayNextProject() {
    if (isAnimating) return false
    setIsAnimating(true)

    const timeline = gsap.timeline()

    timeline
      .fromTo(
        '.word_active',
        {
          xPercent: 0,
          yPercent: 0,
          z: 0,
          rotationX: 0,
          opacity: 1,
        },
        {
          duration: 0.4,
          ease: 'power1.in',
          xPercent: () => gsap.utils.random(-50, 50),
          yPercent: () => gsap.utils.random(-10, 10),
          z: () => gsap.utils.random(-700, -400),
          rotationX: () => gsap.utils.random(-60, 60),
          opacity: 0,
          stagger: {
            each: 0.006,
            from: 'random',
          },
        },
      )
      .fromTo(
        '.word',
        {
          xPercent: () => gsap.utils.random(-50, 50),
          yPercent: () => gsap.utils.random(-10, 10),
          z: () => gsap.utils.random(400, 700),
          rotationX: () => gsap.utils.random(-90, 90),
          opacity: 0,
        },
        {
          duration: 1,
          ease: 'expo',
          xPercent: 0,
          yPercent: 0,
          rotationX: 0,
          z: 0,
          opacity: 1,
          stagger: {
            each: 0.006,
            from: 'random',
          },
          onComplete: () => {
            setActiveProject((activeProject) =>
              activeProject + 1 < projectsData.length ? activeProject + 1 : 0,
            )
            setIsAnimating(false)
          },
        },
        '>-=0.7',
      )
  }

  return (
    <>
      {projectsData.map((project, index) => (
        <div key={`project_${index}`} id={`project_${index}`} className='project'>
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
