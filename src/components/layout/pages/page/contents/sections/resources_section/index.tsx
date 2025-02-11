import React, { useCallback, useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'

import type {
  TExternalLinkData,
  TResourcesParagraphData,
  TSkillsParagraphData,
} from '@/types/data/components/layout/types'

import { usePageContext } from '@/contexts/PageContext'

import { SectionTitle } from '@/components/layout/titles'
import { Paragraph } from '../paragraphs'

import './index.scss'
import { LinksArray } from '@/components/layout/links'

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
      {sectionData.videoIntroduction && (
        <div className='pc_item video_introduction_container'>
          <iframe
            // width='60%'
            // height='280px'
            src={sectionData.videoIntroduction.url}
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          ></iframe>
          <div className='video_introduction_description'>
            {t.rich(
              `${translationPath}.SECTIONS.${sectionData.translationKey}.VIDEO_INTRODUCTION_DESCRIPTION`,
              {
                p: (chunk) => <p>{chunk}</p>,
              },
            )}
          </div>
        </div>
      )}
      <LinksArray
        translationPath={`${translationPath}.${paragraphData.translationKey}`}
        title={'DOCUMENTATION'}
        links={sectionData.documentation as unknown as TExternalLinkData[]}
      />
    </section>
  )
}
