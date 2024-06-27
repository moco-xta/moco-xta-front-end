import React from 'react'
import localFont from 'next/font/local'
import { useLocale, useTranslations } from 'next-intl'

import { SkillsSectionInterface } from '@/interfaces/componentsInterfaces'

import { default as skillsConstants } from '@/constants/skillsConstants.json'

import './index.scss'
const MontserratBlack = localFont({ src: './Montserrat-Black.otf' })

export function SkillsSection({ index, category, content }: SkillsSectionInterface) {
  const t = useTranslations('SKILLS.CATEGORIES')

  const locale = useLocale()

  return (
    <section style={{ backgroundColor: skillsConstants.BACKGROUND_COLORS[index] }}>
      <div className='logo_pictures_wrapper_container'>
        {content.pictures.map((picture_group, index) => {
          return (
            <div
              key={`logo_pictures_wrapper_${category}_${index}`}
              className='logo_pictures_wrapper'
              style={{ marginTop: `${10 * index}vw` }}
            >
              {picture_group.map((picture) => {
                return (
                  // @ts-ignore
                  <img
                    key={picture.alt}
                    className={'logo_picture'}
                    src={picture.src}
                    alt={picture.alt}
                  />
                )
              })}
            </div>
          )
        })}
      </div>
      <div className='skills_description_and_title'>
        <p className='skills_description'>{t(`${content.categoryKey}.DESCRIPTION`)}</p>
        <div
          className={`${MontserratBlack.className} skills_title`}
          style={{
            fontSize: `${content.titleFontSizes && content.titleFontSizes[locale] ? content.titleFontSizes[locale] : 15}vw`,
          }}
        >
          {t(`${content.categoryKey}.TITLE`)}
        </div>
      </div>
    </section>
  )
}
