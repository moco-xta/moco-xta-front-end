import React, { useCallback, useEffect, useRef } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { useTranslations } from 'next-intl'

import type { TExternalLink, TResourcesParagraph } from '@/types/layout'

// import { AppDispatch, RootState } from '@/redux/store'
// import { setCurrentPosition } from '@/redux/slice/resourcesStateSlice'

import { usePageContext } from 'contexts/PageContext'

import { ParagraphTitle } from '../../titles'
import { LinksArray } from '../../links'

import './index.scss'

export default function ResourcesParagraph({
  translationPath,
  paragraphData,
}: TResourcesParagraph) {
  const t = useTranslations()

  // const dispatch = useDispatch<AppDispatch>()
  // const isScrolling = useSelector((state: RootState) => state.resroucesState.isScrolling)

  const { setCurrentPosition, isScrolling } = usePageContext()

  const paragraphRef = useRef<HTMLDivElement>(null!)

  const handleScroll = useCallback(() => {
    if (paragraphRef.current) {
      const boundingBox = paragraphRef.current.getBoundingClientRect()
      if (boundingBox.top >= 0 && boundingBox.top < 100)
        if (!isScrolling)
          // if (!isScrolling) dispatch(setCurrentPosition(paragraphData.key))
          setCurrentPosition(paragraphData.key)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true, capture: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      ref={paragraphRef}
      id={`${paragraphData.key}_paragraph`}
      className='resources_paragraph'
    >
      <ParagraphTitle
        translationPath={t(`${translationPath}.${paragraphData.translationKey}.PARAGRAPH_TITLE`)}
      />
      <p className='pc_item resources_paragraph_description'>
        {t(`${translationPath}.${paragraphData.translationKey}.PARAGRAPH_DESCRIPTION`)}
      </p>
      <LinksArray
        translationPath={`${translationPath}.${paragraphData.translationKey}`}
        title={t('DOCUMENTATION')}
        links={paragraphData.documentation as unknown as TExternalLink[]}
      />
      {paragraphData.websites.length > 0 && (
        <LinksArray
          translationPath={`${translationPath}.${paragraphData.translationKey}`}
          title={t('WEBSITES')}
          links={paragraphData.websites as unknown as TExternalLink[]}
        />
      )}
      {paragraphData.channels.length > 0 && (
        <LinksArray
          translationPath={`${translationPath}.${paragraphData.translationKey}`}
          title={t('CHANNELS')}
          links={paragraphData.channels as unknown as TExternalLink[]}
          youtubePlaylistlink={paragraphData.youtubePlaylistlink}
        />
      )}
      {paragraphData.articles.length > 0 && (
        <LinksArray
          translationPath={`${translationPath}.${paragraphData.translationKey}`}
          title={t('ARTICLES')}
          links={paragraphData.articles as unknown as TExternalLink[]}
          youtubePlaylistlink={paragraphData.youtubePlaylistlink}
        />
      )}
    </div>
  )
}
