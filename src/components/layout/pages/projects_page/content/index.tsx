import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useTranslations } from 'next-intl'

import { capitalizeFirstLetter } from '@/helpers/textHelpers'

import { projectsData } from '@/data/projects/projectsData'

import './index.scss'

export type TContent = {
  currentProject: number
}

export default function Content({ currentProject }: TContent) {
  const t = useTranslations('PROJECTS')

  const projectsTimelineContainerRef = useRef<HTMLDivElement>(null)
  const projectsContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (projectsTimelineContainerRef.current) {
      projectsTimelineContainerRef.current.scrollTop = 0
    }
  }, [])

  useEffect(() => {
    if (projectsContainerRef.current) {
      const projects: HTMLDivElement[] = gsap.utils.toArray(projectsContainerRef.current.children)
      projects.forEach((projectRef, index) => {
        if (index < currentProject) {
          gsap.to(projectRef, {
            y: -document.documentElement.clientHeight * (currentProject - index),
            opacity: 0,
            duration: 0.5,
            ease: 'power3.inOut',
          })
        } else if (index === currentProject) {
          gsap.to(projectRef, {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: 'power3.inOut',
          })
        } else {
          gsap.to(projectRef, {
            y: document.documentElement.clientHeight * (index - currentProject),
            opacity: 0,
            duration: 0.5,
            ease: 'power3.inOut',
          })
        }
      })
    }
  }, [currentProject])

  return (
    <>
      <div
        ref={projectsTimelineContainerRef}
        id='projects_timeline_container'
        style={{ height: `${projectsData.length}00vh` }}
      >
        <p style={{ opacity: 0 }}>Content</p>
      </div>
      <div
        ref={projectsContainerRef}
        id='projects_container'
      >
        {projectsData.map((projectData, index) => (
          <section
            key={`project_section_${projectData.name}`}
            className='project_section'
            style={{
              zIndex: `${projectsData.length - index}` /* background: projectData.backgroundColor.page */,
            }}
          >
            <div className='project_container'>
              <h2>{capitalizeFirstLetter(projectData.name)}</h2>
              <p>{t(projectData.descriptionsKey)}</p>
            </div>
          </section>
        ))}
      </div>
    </>
  )
}
