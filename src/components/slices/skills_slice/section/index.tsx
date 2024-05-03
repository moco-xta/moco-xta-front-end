import React from 'react'
import Image from 'next/image'
import localFont from 'next/font/local'
import { useTranslations } from 'next-intl'

import { SkillsSectionInterface } from '@/interfaces/componentsInterfaces'

import './index.scss'

const MontserratBlack = localFont({ src: './Montserrat-Black.otf' })

export function SkillsSection({ category, content }: SkillsSectionInterface) {
  const t = useTranslations('SKILLS.CATEGORIES')

  return (
    <section style={{ backgroundColor: content.backgroundColor }}>
      <div className='logo_pictures_wrapper_container'>
        {content.pictures.map((picture_group, index) => {
          return (
            <div
              key={`logo_pictures_wrapper_${category}_${index}`}
              className='logo_pictures_wrapper'
              style={{ marginTop: `${200 * index}px` }}
            >
              {picture_group.map((picture) => {
                return (
                  <Image
                    key={picture.alt}
                    className={'logo_picture'}
                    src={picture.src}
                    width={400}
                    height={400}
                    alt={picture.alt}
                  />
                )
              })}
            </div>
          )
        })}
      </div>
      <div className='skills_description_and_title'>
        <p className='skills_description'>{t(content.descriptionKey)}</p>
        <div className={`${MontserratBlack.className} skills_title`}>{t(content.titleKey)}</div>
      </div>
    </section>
  )
}
