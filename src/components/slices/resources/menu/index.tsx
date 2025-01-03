import React from 'react'
import { useSelector } from 'react-redux'
import { useTranslations } from 'next-intl'

import { RootState } from '@/redux/store'

import { default as resourcesConstants } from '@/constants/resources/resourcesConstants.json'

import { capitalizeFirstLetter } from '@/helpers/textHelpers'

import './index.scss'

export default function Menu() {
  const t = useTranslations('RESOURCES')

  const currentSection = useSelector((state: RootState) => state.resroucesState.currentSection)

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
