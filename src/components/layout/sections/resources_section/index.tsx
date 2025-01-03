import React, { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'

import type { TResourcesParagraphData, TResourcesSection } from '@/types/layout'

import useSectionIsVisible from '@/hooks/useSectionIsVisible'

import { SectionTitle } from '../../titles'
import { ResourcesParagraph } from '../../paragraphs'

import './index.scss'

export default function ResourcesSection({ sectionData }: TResourcesSection) {
  const t = useTranslations(`RESOURCES.SECTIONS.${sectionData.translationKey}`)

  const resourcesSectionRef = useRef<HTMLElement>(null!)

  useSectionIsVisible(resourcesSectionRef)

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
