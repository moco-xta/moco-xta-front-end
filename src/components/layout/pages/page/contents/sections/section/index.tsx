import React, { useCallback, useEffect, useRef } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { useTranslations } from 'next-intl'

import type { TSection } from '@/types/components/layout/types'
import type {
  TResourcesParagraphData,
  TSkillsParagraphData,
} from '@/types/data/components/layout/types'

import { usePageContext } from '@/contexts/PageContext'

// import { AppDispatch, RootState } from '@/redux/store'
// import { setCurrentPosition } from '@/redux/slice/resourcesStateSlice'

import { SectionTitle } from '@/components/layout/titles'
import { Paragraph } from '../paragraphs'

import './index.scss'

export default function Section({ translationPath, sectionData }: TSection) {
  const t = useTranslations()

  // const dispatch = useDispatch<AppDispatch>()
  // const isScrolling = useSelector((state: RootState) => state.resroucesState.isScrolling)

  const { handleSetCurrentParagraph, isScrolling } = usePageContext()

  const sectionRef = useRef<HTMLElement>(null!)

  const handleScroll = useCallback(() => {
    if (sectionRef.current) {
      const boundingBox = sectionRef.current.getBoundingClientRect()
      if (boundingBox.top >= 0 && boundingBox.top < 100)
        if (!isScrolling)
          // if (!isScrolling) dispatch(setCurrentPosition(sectionData.key))
          handleSetCurrentParagraph(sectionData)
    }
  }, [handleSetCurrentParagraph, isScrolling, sectionData])

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
      {(sectionData.paragraphs as (TSkillsParagraphData | TResourcesParagraphData)[]).map(
        (paragraphData) => (
          <Paragraph
            key={`paragrah_${sectionData.key}_${paragraphData.key}`}
            sectionData={sectionData}
            translationPath={`${translationPath}.SECTIONS.${sectionData.translationKey}.PARAGRAPHS`}
            paragraphData={paragraphData}
          />
        ),
      )}
    </section>
  )
}
