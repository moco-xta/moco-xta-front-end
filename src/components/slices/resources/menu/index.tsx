import React from 'react'
import { useTranslations } from 'next-intl'

import type { TResourcesMenu } from '@/types/layout'

import { default as resourcesConstants } from '@/constants/resources/resourcesConstants.json'

import { capitalizeFirstLetter } from '@/helpers/textHelpers'

import './index.scss'

export default function Menu({ currentSection }: TResourcesMenu) {
  const t = useTranslations('RESOURCES')

  return (
    <div id='resources_menu'>
      <p id='on_this_page'>{t('ON_THIS_PAGE')}</p>
      <ul>
        {resourcesConstants.map((sectionData) => (
          <li>
            <a
              href={`#${sectionData.key}`}
              className={`menu_section ${currentSection === sectionData.key ? 'current_section' : ''}`}
            >
              {capitalizeFirstLetter(t(`SECTIONS.${sectionData.translationKey}.SECTION_TITLE`))}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
