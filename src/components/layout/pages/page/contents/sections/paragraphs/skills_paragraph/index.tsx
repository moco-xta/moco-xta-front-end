import React, { useCallback, useEffect, useRef } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { useTranslations } from 'next-intl'

import type { TSkillsParagraph } from '@/types/components/layout/types'

import { usePageContext } from 'contexts/PageContext'

// import { AppDispatch, RootState } from '@/redux/store'
// import { setCurrentPosition } from '@/redux/slice/resourcesStateSlice'

import { ParagraphTitle } from '@/components/layout/titles'
import { SkillLogoCanvas } from '@/components/three/canvas'

import './index.scss'

export default function SkillsParagraph({ translationPath, paragraphData }: TSkillsParagraph) {
  const t = useTranslations()

  // const dispatch = useDispatch<AppDispatch>()
  // const isScrolling = useSelector((state: RootState) => state.resroucesState.isScrolling)

  const { handleSetCurrentPosition, isScrolling } = usePageContext()

  const paragraphRef = useRef<HTMLDivElement>(null!)

  const handleScroll = useCallback(() => {
    if (paragraphRef.current) {
      const boundingBox = paragraphRef.current.getBoundingClientRect()
      if (boundingBox.top >= 0 && boundingBox.top < 100)
        if (!isScrolling)
          // if (!isScrolling) dispatch(setCurrentPosition(paragraphData.key))
          handleSetCurrentPosition(paragraphData.key)
    }
  }, [handleSetCurrentPosition, isScrolling, paragraphData.key])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true, capture: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <div
      ref={paragraphRef}
      id={`${paragraphData.key}_paragraph`}
      className='pc_item skills_paragraph'
    >
      <ParagraphTitle
        translationPath={`${translationPath}.${paragraphData.translationKey}.PARAGRAPH_TITLE`}
      />
      <div className='pc_item sp_content'>
        <div className='sp_canvas_container'>
          <SkillLogoCanvas logoData={paragraphData.logo} />
        </div>
        <p className='sp_description'>
          {t(`${translationPath}.${paragraphData.translationKey}.PARAGRAPH_DESCRIPTION`)}
        </p>
      </div>
    </div>
  )
}
