import React, { useRef } from 'react'
import { useTranslations } from 'next-intl'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import type { TCompanyData, TProjectData } from '@/types/data/components/layout/types'

import { SectionTitle } from '@/components/layout/titles'

import { capitalizeFirstLetter } from '@/helpers/textHelpers'

import './index.scss'

export type TSection = {
  projectData: TProjectData
  companiesData: TCompanyData[]
  currentCompany: number
}

export default function Section({ projectData, companiesData, currentCompany }: TSection) {
  const t = useTranslations('PROJECTS')

  const projectSectionRef = useRef<HTMLDivElement>(null!)

  useGSAP(
    () => {
      gsap.to(projectSectionRef.current, {
        opacity: 1,
        duration: 1,
        ease: 'power2.in',
      })
    },
    { scope: projectSectionRef },
  )

  return (
    <section
      key={`project_section_${projectData.name}`}
      ref={projectSectionRef}
      className='project_section'
      style={{
        opacity: 0,
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
  )
}
