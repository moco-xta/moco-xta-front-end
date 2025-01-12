import React from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import type { TContent } from '@/types/components/layout/types'

import { PageIntroduction, Section } from '../sections'

import './index.scss'

export default function PageContent({ pageData }: TContent) {
  useGSAP(() => {
    gsap.from('.pc_item', {
      duration: 0.5,
      opacity: 0,
      y: 120,
      stagger: 0.1,
      delay: 1,
    })
  })

  return (
    <div
      id={`${pageData.key}_content`}
      className='page_content'
      data-lenis-prevent
    >
      <PageIntroduction
        prefixKey={pageData.key}
        translationPath={pageData.translationKey}
      />
      {pageData.sections.map((sectionData) => (
        <Section
          key={`section_${sectionData.key}`}
          translationPath={pageData.translationKey}
          sectionData={sectionData}
        />
      ))}
    </div>
  )
}
