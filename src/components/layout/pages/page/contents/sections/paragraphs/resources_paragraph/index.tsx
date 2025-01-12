import React, { useCallback, useEffect, useRef } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { useTranslations } from 'next-intl'

import type { TResourcesParagraph } from '@/types/components/layout/types'

import { usePageContext } from 'contexts/PageContext'

// import { AppDispatch, RootState } from '@/redux/store'
// import { setCurrentPosition } from '@/redux/slice/resourcesStateSlice'

import { ParagraphTitle } from '@/components/layout/titles'
import { LinksArray } from '@/components/layout/links'

import './index.scss'
import { TExternalLinkData } from '@/types/data/components/layout/types'

export default function ResourcesParagraph({
  translationPath,
  paragraphData,
}: TResourcesParagraph) {
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
      className='resources_paragraph'
    >
      <ParagraphTitle
        translationPath={`${translationPath}.${paragraphData.translationKey}.PARAGRAPH_TITLE`}
      />
      <p className='pc_item resources_paragraph_description'>
        {t(`${translationPath}.${paragraphData.translationKey}.PARAGRAPH_DESCRIPTION`)}
      </p>
      <LinksArray
        translationPath={`${translationPath}.${paragraphData.translationKey}`}
        title={'DOCUMENTATION'}
        links={paragraphData.documentation as unknown as TExternalLinkData[]}
      />
      {paragraphData.websites.length > 0 && (
        <LinksArray
          translationPath={`${translationPath}.${paragraphData.translationKey}`}
          title={'WEBSITES'}
          links={paragraphData.websites as unknown as TExternalLinkData[]}
        />
      )}
      {paragraphData.channels.length > 0 && (
        <LinksArray
          translationPath={`${translationPath}.${paragraphData.translationKey}`}
          title={'CHANNELS'}
          links={paragraphData.channels as unknown as TExternalLinkData[]}
          youtubePlaylistlink={paragraphData.youtubePlaylistlink}
        />
      )}
      {paragraphData.articles.length > 0 && (
        <LinksArray
          translationPath={`${translationPath}.${paragraphData.translationKey}`}
          title={'ARTICLES'}
          links={paragraphData.articles as unknown as TExternalLinkData[]}
          youtubePlaylistlink={paragraphData.youtubePlaylistlink}
        />
      )}
    </div>
  )
}
