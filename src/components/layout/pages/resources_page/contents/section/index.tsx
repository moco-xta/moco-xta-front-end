import React, { useCallback, useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'

import type { TResourcesParagraphData } from '@/types/data/components/layout/types'
import type { TResourcesSection } from '@/types/components/layout/types'

import { usePageContext } from '@/contexts/PageContext'

import { SectionTitle } from '@/components/layout/titles'
import ResourcesParagraph from './paragraph'

import './index.scss'

export default function ResourcesSection({ translationPath, sectionData }: TResourcesSection) {
  const t = useTranslations()

  const { handleSetCurrentParagraph } = usePageContext()

  const sectionRef = useRef<HTMLElement>(null!)

  const handleScroll = useCallback(() => {
    if (sectionRef.current) {
      const boundingBox = sectionRef.current.getBoundingClientRect()
      if (boundingBox.top >= 0 && boundingBox.top < 100)
        handleSetCurrentParagraph({
          key: 'introduction',
          translationKey: 'LAYOUT.SIDE_NAVIGATION_MENU.INTRODUCTION',
        })
    }
  }, [handleSetCurrentParagraph])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true, capture: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <section
      ref={sectionRef}
      id={`${sectionData.key}_section`}
      className='pc_item'
    >
      <SectionTitle
        translationPath={`${translationPath}.SECTIONS.${sectionData.translationKey}.SECTION_TITLE`}
      />
      <div className='pc_item section_description'>
        {t.rich(`${translationPath}.SECTIONS.${sectionData.translationKey}.SECTION_DESCRIPTION`, {
          p: (chunk) => <p className='paragraph_translation'>{chunk}</p>,
        })}
      </div>
      {(sectionData.paragraphs as TResourcesParagraphData[]).map((paragraphData) => (
        <ResourcesParagraph
          key={`paragrah_${sectionData.key}_${paragraphData.key}`}
          translationPath={`${translationPath}.SECTIONS.${sectionData.translationKey}.PARAGRAPHS`}
          paragraphData={paragraphData}
        />
      ))}
    </section>
  )
}
