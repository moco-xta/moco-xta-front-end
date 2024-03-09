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
        gsap.set(['.word_active', '.word'], { transformPerspective: 900 })
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
          xPercent: 0,
          yPercent: 0,
          z: 0,
          rotationX: 0,
          opacity: 1,
        },
        { 
          duration: 0.4,
          /* duration: 2, */
          ease: 'power1.in',
          xPercent: () => gsap.utils.random(-50, 50),
          yPercent: () => gsap.utils.random(-10, 10),
          z: () => gsap.utils.random(-700, -400),
          rotationX: () => gsap.utils.random(-60, 60),
          opacity: 0,
          stagger: {
            each: 0.006,
            from: 'random'
          },
        }
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
          /* duration: 0.8, */
          duration: 2,
          ease: 'expo',
          xPercent: 0,
          yPercent: 0,
          rotationX: 0,
          z: 0,
          opacity: 1,
          stagger: {
            each: 0.006,
            from: 'random'
          },
          onComplete: () => {
            setActiveProject((activeProject) => activeProject + 1 < projectsData.length ? activeProject + 1 : 0)
            setIsAnimating(false)
          }
        },
        '>-=0.6',
      )
  }

  return (
    <>
      <h1>Title</h1>
      <div className='project_details'>
        {projectsDescriptionRefs.map(({ ref }, index) => (
          <p
            key={`project_description_${index}`}
            ref={ref}
            id={`project_description_${index}`}
            className='project_description'
          >
            {splitTextInArrayOfWords(projectsData[index].description).map(word => (
              <>
                <span className={`word${activeProject === index ? '_active' : ''}`}>{word}&nbsp;</span>
              </>
            ))}
          </p>
        ))}
      </div>
      <button disabled={isAnimating} onClick={displayNextProject} style={{ color: isAnimating ? 'red' : 'green' }}>Next project</button>
    </>
  )
}
