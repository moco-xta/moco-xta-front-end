import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslations } from 'next-intl'

import { AppDispatch, RootState } from '@/redux/store'
import { setCurrentSection } from '@/redux/slice/resourcesStateSlice'

import { default as resourcesConstants } from '@/constants/resources/resourcesConstants.json'

import { capitalizeFirstLetter } from '@/helpers/textHelpers'

import './index.scss'

export default function Menu() {
  const t = useTranslations('RESOURCES')

  const dispatch = useDispatch<AppDispatch>()

  const currentSection = useSelector((state: RootState) => state.resroucesState.currentSection)

  function handleOnClick(key: string) {
    document.getElementById(key)!.scrollIntoView({ block: 'start', behavior: 'smooth' })
    dispatch(setCurrentSection(key))
  }

  return (
    <div id='resources_menu'>
      <p id='on_this_page'>{t('ON_THIS_PAGE')}</p>
      <ul>
        {resourcesConstants.map((sectionData) => (
          <li>
            <a
              className={`menu_section ${currentSection === sectionData.key ? 'current_section' : ''}`}
              onClick={() => handleOnClick(sectionData.key)}
            >
              {capitalizeFirstLetter(t(`SECTIONS.${sectionData.translationKey}.SECTION_TITLE`))}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
