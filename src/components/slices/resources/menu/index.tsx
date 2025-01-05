import React, { useCallback, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslations } from 'next-intl'

import { AppDispatch, RootState } from '@/redux/store'
import { setIsScrolling } from '@/redux/slice/resourcesStateSlice'

import SdmScrollToTop from '@/components/layout/buttons/sdm_scroll_to_top'

import { capitalizeFirstLetter } from '@/helpers/textHelpers'

import { default as resourcesConstants } from '@/constants/resources/resourcesConstants.json'

import './index.scss'

export default function Menu() {
  const t = useTranslations('RESOURCES')

  const dispatch = useDispatch<AppDispatch>()

  const { currentPosition } = useSelector((state: RootState) => state.resroucesState)

  const menuItemsRef = useRef<string[]>([])

  useEffect(() => {
    console.log('menuItemsRef', menuItemsRef)
  }, [menuItemsRef])

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
        {resourcesConstants.map((sectionData) => {
          if (menuItemsRef.current.indexOf(sectionData.key) === -1) {
            menuItemsRef.current.push(sectionData.key)
          }
          return (
            <li className='li_section'>
              <a
                className={`menu_section ${currentPosition === sectionData.key ? 'current_section' : menuItemsRef.current.indexOf(currentPosition) > menuItemsRef.current.indexOf(sectionData.key) ? 'past' : ''}`}
                onClick={() => handleOnClick(sectionData.key)}
              >
                {capitalizeFirstLetter(t(`SECTIONS.${sectionData.translationKey}.SECTION_TITLE`))}
              </a>
              <ul>
                {sectionData.paragraphs.map((paragraphData) => {
                  if (menuItemsRef.current.indexOf(paragraphData.key) === -1) {
                    menuItemsRef.current.push(paragraphData.key)
                  }
                  return (
                    <li>
                      <a
                        className={`menu_paragraph ${currentPosition === paragraphData.key ? 'current_paragraph' : menuItemsRef.current.indexOf(currentPosition) > menuItemsRef.current.indexOf(paragraphData.key) ? 'past' : ''}`}
                        // className={`menu_paragraph`}
                        // style={{ marginLeft: '7px', fontSize: '11px' }}
                        onClick={() => handleOnClick(paragraphData.key)}
                      >
                        {capitalizeFirstLetter(
                          t(
                            `SECTIONS.${sectionData.translationKey}.PARAGRAPHS.${paragraphData.translationKey}.PARAGRAPH_TITLE`,
                          ),
                        )}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </li>
          )
        })}
      </ul>
      <SdmScrollToTop elementId={'resources_content'} />
    </div>
  )
}
