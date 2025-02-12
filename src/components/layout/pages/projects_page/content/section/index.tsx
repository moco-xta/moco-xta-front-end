import React, { useRef } from 'react'
import { useLocale, useTranslations } from 'next-intl'
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
  const locale = useLocale()
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
        <SectionTitle title={projectData.name} />
        <div className='project_details'>
          <div className='skills_and_with'>
            <span className='project_roles'>
              {capitalizeFirstLetter(
                t('SKILL') +
                  `${projectData.roles.length > 1 ? (locale === 'es' ? 'es' : 's') : ''}`,
              )}
              {': '}
              {projectData.roles.map(
                (role, index) => role + (index === projectData.roles.length - 1 ? '' : ', '),
              )}
            </span>
            {companiesData[currentCompany]?.name &&
              projectData.key !== 'moco' &&
              projectData.key !== 'openclassrooms' && (
                <span>
                  {', '}
                  {t('WITH')} {capitalizeFirstLetter(companiesData[currentCompany]?.name ?? '')}
                </span>
              )}
          </div>
          {t.rich(projectData.descriptionsKey, {
            p: (chunk) => <p className='project_description'>{chunk}</p>,
          })}
          {/* <p className='project_tools'>
            {projectData.logos.tools.map((tool, index) => (
              <span key={`role_${projectData.key}_${index}`}>#{tool.name}</span>
            ))}
          </p> */}
        </div>
      </div>
    </section>
  )
}
