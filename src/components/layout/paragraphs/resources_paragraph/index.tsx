import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslations } from 'next-intl'

import type { TExternalLink, TResourcesParagraph } from '@/types/layout'

import { AppDispatch, RootState } from '@/redux/store'
import { setCurrentPosition } from '@/redux/slice/resourcesStateSlice'

import { ParagraphTitle } from '../../titles'
import { LinksArray } from '../../links'

import './index.scss'

export default function ResourcesParagraph({
  translationPath,
  paragraphData,
}: TResourcesParagraph) {
  const t = useTranslations()

  const dispatch = useDispatch<AppDispatch>()
  const isScrolling = useSelector((state: RootState) => state.resroucesState.isScrolling)

  const resourcesParagraphRef = useRef<HTMLDivElement>(null!)

  const handleScroll = useCallback((e: Event) => {
    if (resourcesParagraphRef.current) {
      const boundingBox = resourcesParagraphRef.current.getBoundingClientRect()
      if (boundingBox.top >= 0 && boundingBox.top < 120)
        if (!isScrolling) dispatch(setCurrentPosition(resourcesParagraphRef.current.id))
      console.log('resourcesParagraphRef.current.id', resourcesParagraphRef.current.id)
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
      ref={resourcesParagraphRef}
      id={paragraphData.key}
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
