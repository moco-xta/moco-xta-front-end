import React, { useCallback, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslations } from 'next-intl'

import type { TResourcesParagraphData, TResourcesSection } from '@/types/layout'

import { AppDispatch, RootState } from '@/redux/store'
import { setCurrentPosition } from '@/redux/slice/resourcesStateSlice'

import { SectionTitle } from '../../titles'
import { ResourcesParagraph } from '../../paragraphs'

import './index.scss'

export default function ResourcesSection({ sectionData }: TResourcesSection) {
  const t = useTranslations(`RESOURCES.SECTIONS.${sectionData.translationKey}`)

  const dispatch = useDispatch<AppDispatch>()
  const isScrolling = useSelector((state: RootState) => state.resroucesState.isScrolling)

  const resourcesSectionRef = useRef<HTMLElement>(null!)

  // useSectionIsVisible(resourcesSectionRef)

  const handleScroll = useCallback((e: Event) => {
    if (resourcesSectionRef.current) {
      const boundingBox = resourcesSectionRef.current.getBoundingClientRect()
      if (boundingBox.top >= 0 && boundingBox.top < 120)
        if (!isScrolling) dispatch(setCurrentPosition(resourcesSectionRef.current.id))
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true, capture: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

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
