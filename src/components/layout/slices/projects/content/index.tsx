import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

import Section from './section'

import { projectsData } from '@/data/projects/projectsData'
import { companiesData } from '@/data/projects/companiesData'

import './index.scss'

export type TContent = {
  currentProject: number
  currentCompany: number
}

export default function Content({ currentProject, currentCompany }: TContent) {
  const projectsContainerRef = useRef<HTMLDivElement>(null!)
  const projectsTimelineContainerRef = useRef<HTMLDivElement>(null!)

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
        ref={projectsContainerRef}
        id='projects_container'
      >
        {projectsData.map((projectData, index) => (
          <Section
            key={`project_section_${projectData.name}`}
            projectData={projectData}
            companiesData={companiesData}
            index={index}
            currentCompany={currentCompany}
          />
        ))}
      </div>
      <div
        ref={projectsTimelineContainerRef}
        id='projects_timeline_container'
        style={{ height: 10000 }}
      >
        <p style={{ opacity: 0 }}>Content</p>
      </div>
    </>
  )
}
