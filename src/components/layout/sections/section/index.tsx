import React, { useCallback, useEffect, useRef } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { useTranslations } from 'next-intl'

import type { TSection } from '@/types/layout'

// import { AppDispatch, RootState } from '@/redux/store'
// import { setCurrentPosition } from '@/redux/slice/resourcesStateSlice'

import { usePageContext } from 'contexts/PageContext'

import { SectionTitle } from '../../titles'
import { SkillsParagraph } from '../../paragraphs'

import './index.scss'

export default function Section({ translationPath, sectionData }: TSection) {
  const t = useTranslations()

  // const dispatch = useDispatch<AppDispatch>()
  // const isScrolling = useSelector((state: RootState) => state.resroucesState.isScrolling)

  const { setCurrentPosition, isScrolling } = usePageContext()

  const sectionRef = useRef<HTMLElement>(null!)

  const handleScroll = useCallback((e: Event) => {
    if (sectionRef.current) {
      const boundingBox = sectionRef.current.getBoundingClientRect()
      if (boundingBox.top >= 0 && boundingBox.top < 100)
        if (!isScrolling)
          // if (!isScrolling) dispatch(setCurrentPosition(sectionData.key))
          setCurrentPosition(sectionData.key)
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
      ref={sectionRef}
      id={`${sectionData.key}_section`}
      className='pc_item'
    >
      <SectionTitle
        translationPath={`${translationPath}.SECTIONS.${sectionData.translationKey}.SECTION_TITLE`}
      />
      <p className='pc_item section_description'>
        {t(`${translationPath}.SECTIONS.${sectionData.translationKey}.SECTION_DESCRIPTION`)}
      </p>
      {sectionData.paragraphs.map((paragraphData) => (
        <>
          {translationPath.split('.')[0] === 'SKILLS' && (
            <SkillsParagraph
              key={`paragraph_${paragraphData.key}`}
              translationPath={`${translationPath}.SECTIONS.${sectionData.translationKey}.PARAGRAPHS`}
              paragraphData={paragraphData}
            />
          )}
        </>
      ))}
    </section>
  )
}
