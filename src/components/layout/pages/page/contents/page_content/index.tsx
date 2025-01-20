import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import type { TContent } from '@/types/components/layout/types'

import { usePageContext } from '@/contexts/PageContext'

import { PageIntroduction, Section } from '../sections'

import './index.scss'

export default function PageContent({ pageData }: TContent) {
  const { currentSection } = usePageContext()

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
    const lastParagraph = document.getElementById(`${pageData.key}_content`)!.children[0].lastChild
    pageContentRef.current.style.paddingBottom = `${window.innerHeight - (lastParagraph as unknown as HTMLElement).clientHeight + 35}px`
  })

  useEffect(() => {
    document.getElementById(`${pageData.key}_content`)!.scrollTo(0, 0)
  }, [currentSection, pageData.key])

  return (
    <div
      ref={pageContentRef}
      id={`${pageData.key}_content`}
      className='page_content'
      data-lenis-prevent
    >
      {currentSection.key === 'introduction' && (
        <PageIntroduction
          key='section_introduction'
          prefixKey={pageData.key}
          translationPath={pageData.translationKey}
        />
      )}
      {pageData.sections.map((sectionData) => (
        <>
          {currentSection.key === sectionData.key && (
            <Section
              key={`section_${sectionData.key}`}
              translationPath={pageData.translationKey}
              sectionData={sectionData}
            />
          )}
        </>
      ))}
    </div>
  )
}
