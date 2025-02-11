import React, { useCallback, useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'

import type { TResourcesParagraph } from '@/types/components/layout/types'
import type { TExternalLinkData } from '@/types/data/components/layout/types'

import { usePageContext } from '@/contexts/PageContext'

import { ParagraphTitle } from '@/components/layout/titles'
import { LinksArray } from '@/components/layout/links'

import './index.scss'

export default function ResourcesParagraph({
  translationPath,
  paragraphData,
}: TResourcesParagraph) {
  const t = useTranslations()

  const { handleSetCurrentParagraph } = usePageContext()

  const paragraphRef = useRef<HTMLDivElement>(null!)

  const handleScroll = useCallback(() => {
    if (paragraphRef.current) {
      const boundingBox = paragraphRef.current.getBoundingClientRect()
      if (boundingBox.top >= 0 && boundingBox.top < 100) handleSetCurrentParagraph(paragraphData)
    }
  }, [handleSetCurrentParagraph, paragraphData])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true, capture: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <section
      ref={paragraphRef}
      id={`${paragraphData.key}_paragraph`}
      className='pc_item resources_paragraph'
    >
      <ParagraphTitle
        translationPath={`${translationPath}.${paragraphData.translationKey}.PARAGRAPH_TITLE`}
      />
      <div className='pc_item section_description'>
        {t.rich(`${translationPath}.${paragraphData.translationKey}.PARAGRAPH_DESCRIPTION`, {
          p: (chunk) => <p className='paragraph_translation'>{chunk}</p>,
        })}
      </div>
      {paragraphData.videoIntroduction && (
        <div className='pc_item video_introduction_container'>
          <iframe
            // width='60%'
            height='255px'
            src={paragraphData.videoIntroduction.url}
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          ></iframe>
          <div>
            {t.rich(
              `${translationPath}.${paragraphData.translationKey}.VIDEO_INTRODUCTION_DESCRIPTION`,
              {
                p: (chunk) => <p className='video_introduction_description'>{chunk}</p>,
              },
            )}
          </div>
        </div>
      )}
      {paragraphData.categories.documentation &&
        paragraphData.categories.documentation.length > 0 && (
          <LinksArray
            translationPath={`${translationPath}.${paragraphData.categories.translationKey}`}
            title={'DOCUMENTATION'}
            links={paragraphData.categories.documentation as unknown as TExternalLinkData[]}
          />
        )}
      {paragraphData.categories.channels && paragraphData.categories.channels.length > 0 && (
        <LinksArray
          translationPath={`${translationPath}.${paragraphData.categories.translationKey}`}
          title={'CHANNELS'}
          links={paragraphData.categories.channels as unknown as TExternalLinkData[]}
          youtubePlaylistLink={paragraphData.categories.youtubePlaylistLink}
        />
      )}
      {paragraphData.categories.websites && paragraphData.categories.websites.length > 0 && (
        <LinksArray
          translationPath={`${translationPath}.${paragraphData.categories.translationKey}`}
          title={'WEBSITES'}
          links={paragraphData.categories.websites as unknown as TExternalLinkData[]}
        />
      )}
    </section>
  )
}
