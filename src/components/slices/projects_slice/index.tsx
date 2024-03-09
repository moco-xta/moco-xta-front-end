'use client'

import React, { createRef, useEffect, useMemo, useState } from 'react'
import gsap from 'gsap'

import { projectsData } from '@/data/projetcsData'

import './index.scss'
import { splitTextInArrayOfWords } from '@/helpers/cssHelpers'

export default function ProjectSlice() {
  let currentTextPos = 0

  console.log(projectsData.length)

  const [activeProject, setActiveProject] = useState<number>(0)
  const [isAnimating, setIsAnimating] = useState<boolean>(false)

  const projectsDescriptionRefs = useMemo(
    () =>
      projectsData.map(() => ({
        ref: createRef<HTMLParagraphElement>(),
      })),
    [],
  )

  useEffect(() => {
    projectsDescriptionRefs.forEach(({ ref }) => {
      if (ref.current) {
        gsap.set('.project_description', { perspective: 1000 })
      }
    })
  }, [])

  function displayNextProject() {
    if (isAnimating) return false
    setIsAnimating(true)

    const timeline = gsap.timeline()

    timeline
      .fromTo(
        '.word_active',
        { 
          opacity: 1
        },
        { 
          duration: 1,
          opacity: 0,
        }
      )
      .fromTo(
        '.word',
        {
          opacity: 0,
        },
        {
          duration: 1,
          opacity: 1,
          onComplete: () => {
            setActiveProject((activeProject) => activeProject + 1 < projectsData.length ? activeProject + 1 : 0)
            setIsAnimating(false)
          }
        },
        '>-=0.45',
      )
  }

  return (
    <>
      <div>
        <h1>Title</h1>
        {projectsDescriptionRefs.map(({ ref }, index) => (
          <p
            key={`project_description_${index}`}
            ref={ref}
            id={`project_description_${index}`}
          >
            {splitTextInArrayOfWords(projectsData[index].description).map(word => (<span className={`word${activeProject === index ? '_active' : ''}`}>{word} </span>))}
          </p>
        ))}
      </div>
      <button disabled={isAnimating} onClick={displayNextProject} style={{ color: isAnimating ? 'red' : 'green' }}>Next project</button>
    </>
  )
}
