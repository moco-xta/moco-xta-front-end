import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useTranslations } from 'next-intl'

import { SectionTitle } from '@/components/layout/titles'

import { projectsData } from '@/data/projects/projectsData'

import './index.scss'
import { companiesData } from '@/data/projects/companiesData'
import { capitalizeFirstLetter } from '@/helpers/textHelpers'

export type TContent = {
  currentProject: number
  currentCompany: number
}

export default function Content({ currentProject, currentCompany }: TContent) {
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
              zIndex: `${projectsData.length - index}`,
            }}
          >
            <div className='project_container'>
              <SectionTitle
                title={`${projectData.name} ${companiesData[currentCompany]?.name ? ' with ' + capitalizeFirstLetter(companiesData[currentCompany].name) : ''}`}
              />
              <p className='project_roles'>
                {projectData.roles.map((role, index) => (
                  <span key={`role_${projectData.key}_${index}`}>{role}</span>
                ))}
              </p>
              <p className='project_description'>{t(projectData.descriptionsKey)}</p>
              <p className='project_tools'>
                {projectData.logos.tools.map((tool, index) => (
                  <span key={`role_${projectData.key}_${index}`}>#{tool.name}</span>
                ))}
              </p>
            </div>
          </section>
        ))}
      </div>
    </>
  )
}
