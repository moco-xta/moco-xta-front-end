import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslations } from 'next-intl'

import { AppDispatch, RootState } from '@/redux/store'
import { setIsScrolling } from '@/redux/slice/resourcesStateSlice'

import { default as resourcesConstants } from '@/constants/resources/resourcesConstants.json'

import { capitalizeFirstLetter } from '@/helpers/textHelpers'

import './index.scss'
import ScrollToTop from '@/components/layout/buttons/scroll_to_top'

export default function Menu() {
  const t = useTranslations('RESOURCES')

  const dispatch = useDispatch<AppDispatch>()

  const currentSection = useSelector((state: RootState) => state.resroucesState.currentSection)

  function handleOnClick(key: string) {
    document.getElementById(key)!.scrollIntoView({ block: 'start', behavior: 'smooth' })
    dispatch(setIsScrolling(true))
  }

  let scrollTimeout: NodeJS.Timeout
  const handleScroll = useCallback(() => {
    clearTimeout(scrollTimeout)
    scrollTimeout = setTimeout(function () {
      dispatch(setIsScrolling(false))
    }, 100)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true, capture: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

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
      <ScrollToTop elementId={'resources_content'} />
    </div>
  )
}
