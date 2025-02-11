import React, { useRef } from 'react'
import { useTranslations } from 'next-intl'

import type { TResourcesSection } from '@/types/components/layout/types'

import { SectionTitle } from '@/components/layout/titles'
import { LinksArray } from '@/components/layout/links'

import './index.scss'
import { TExternalLinkData } from '@/types/data/components/layout/types'

export default function ResourcesSection({ translationPath, sectionData }: TResourcesSection) {
  const t = useTranslations()

  const sectionRef = useRef<HTMLElement>(null!)

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
            height='255px'
            src={sectionData.videoIntroduction.url}
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          ></iframe>
          <div>
            {t.rich(
              `${translationPath}.SECTIONS.${sectionData.translationKey}.VIDEO_INTRODUCTION_DESCRIPTION`,
              {
                p: (chunk) => <p className='video_introduction_description'>{chunk}</p>,
              },
            )}
          </div>
        </div>
      )}
      <LinksArray
        translationPath={`${translationPath}.${sectionData.paragraphs.translationKey}`}
        title={'DOCUMENTATION'}
        links={sectionData.paragraphs.documentation as unknown as TExternalLinkData[]}
      />
    </section>
  )
}
