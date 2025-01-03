import React, { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'

import type { TResourcesParagraphData, TResourcesSection } from '@/types/layout'

import { SectionTitle } from '../../titles'
import { ResourcesParagraph } from '../../paragraphs'

import './index.scss'
import useSectionIsVisible from '@/hooks/useSectionIsVisible'

export default function ResourcesSection({ sectionData, setCurrentSection }: TResourcesSection) {
  const t = useTranslations(`RESOURCES.SECTIONS.${sectionData.translationKey}`)

  const resourcesSectionRef = useRef<HTMLElement>(null!)

  const isIntersecting = useSectionIsVisible(resourcesSectionRef)

  useEffect(() => {
    if (isIntersecting) setCurrentSection(sectionData.key)
  }, [isIntersecting])

  return (
    <section
      ref={resourcesSectionRef}
      id={sectionData.key}
      className='resources_section'
    >
      <SectionTitle text={t('SECTION_TITLE')} />
      <p className='resources_section_description'>{t('SECTION_DESCRIPTION')}</p>
      {sectionData.paragraphs.map((paragraphData) => (
        <ResourcesParagraph
          key={`resource_paragraph_${paragraphData.key}`}
          translationPathPrefix={`RESOURCES.SECTIONS.${sectionData.translationKey}`}
          paragraphData={paragraphData as unknown as TResourcesParagraphData}
        />
      ))}
    </section>
  )
}
