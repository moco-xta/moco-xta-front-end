import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import type { TResourcesContent } from '@/types/components/layout/types'

import { useResourcesPageContext } from '@/contexts/ResourcesPageContext'

import { PageIntroduction } from '../../page/contents/sections'
import ResourcesSection from './section'

import './index.scss'

export default function ResourcesPageContent({ resourcesPageData }: TResourcesContent) {
  const { currentSection } = useResourcesPageContext()

  const pageContentRef = useRef<HTMLDivElement>(null!)

  useGSAP(() => {
    gsap.from('.pc_item', {
      duration: 0.5,
      opacity: 0,
      y: 120,
      stagger: 0.1,
      delay: 1,
    })
  })

  useEffect(() => {
    const lastParagraph = document.getElementById(`${resourcesPageData.key}_content`)!.children[0]
      .lastChild
    pageContentRef.current.style.paddingBottom =
      currentSection.key !== 'introduction'
        ? `${window.innerHeight - (lastParagraph as unknown as HTMLElement).clientHeight + 55}px`
        : '0px'
  })

  useEffect(() => {
    document.getElementById(`${resourcesPageData.key}_content`)!.scrollTo(0, 0)
  }, [currentSection, resourcesPageData.key])

  return (
    <div
      ref={pageContentRef}
      id={`${resourcesPageData.key}_content`}
      className='page_content'
      data-lenis-prevent
    >
      {currentSection.key === 'introduction' && (
        <PageIntroduction
          key='section_introduction'
          prefixKey={resourcesPageData.key}
          translationPath={resourcesPageData.translationKey}
        />
      )}
      {resourcesPageData.sections.map((resourcesSectionData) => (
        <>
          {currentSection.key === resourcesSectionData.key && (
            <ResourcesSection
              key={`section_${resourcesSectionData.key}`}
              translationPath={resourcesPageData.translationKey}
              sectionData={resourcesSectionData}
            />
          )}
        </>
      ))}
    </div>
  )
}
