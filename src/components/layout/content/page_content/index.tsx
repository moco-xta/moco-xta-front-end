import React from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import type { TContent } from '@/types/layout'

import { PageIntroduction, Section } from '../../sections'

import './index.scss'

export default function Content({ pageData }: TContent) {
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
        key={pageData.key}
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
