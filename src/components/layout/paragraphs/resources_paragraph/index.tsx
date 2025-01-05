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
  translationPathPrefix,
  paragraphData,
}: TResourcesParagraph) {
  const t = useTranslations()

  const dispatch = useDispatch<AppDispatch>()
  const isScrolling = useSelector((state: RootState) => state.resroucesState.isScrolling)

  const [translationPath] = useState<string>(
    `${translationPathPrefix}.PARAGRAPHS.${paragraphData.translationKey}`,
  )

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
      <ParagraphTitle text={t(`${translationPath}.PARAGRAPH_TITLE`)} />
      <p className='resources_paragraph_description'>
        {t(`${translationPath}.PARAGRAPH_DESCRIPTION`)}
      </p>
      <LinksArray
        translationPathPrefix={translationPath}
        title={t('DOCUMENTATION')}
        links={paragraphData.documentation as unknown as TExternalLink[]}
      />
      {paragraphData.websites.length > 0 && (
        <LinksArray
          translationPathPrefix={translationPath}
          title={t('WEBSITES')}
          links={paragraphData.websites as unknown as TExternalLink[]}
        />
      )}
      {paragraphData.channels.length > 0 && (
        <LinksArray
          translationPathPrefix={translationPath}
          title={t('CHANNELS')}
          links={paragraphData.channels as unknown as TExternalLink[]}
          youtubePlaylistlink={paragraphData.youtubePlaylistlink}
        />
      )}
      {paragraphData.articles.length > 0 && (
        <LinksArray
          translationPathPrefix={translationPath}
          title={t('ARTICLES')}
          links={paragraphData.articles as unknown as TExternalLink[]}
          youtubePlaylistlink={paragraphData.youtubePlaylistlink}
        />
      )}
    </div>
  )
}
