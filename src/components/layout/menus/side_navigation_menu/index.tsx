import React, { useLayoutEffect, useRef } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTranslations } from 'next-intl'

import type { TSideNavigationMenu } from '@/types/layout'

// import { AppDispatch, RootState } from '@/redux/store'
// import { setIsScrolling } from '@/redux/slice/resourcesStateSlice'

import { usePageContext } from 'contexts/PageContext'

import { SdmScrollToTop } from '../../buttons'

import { capitalizeFirstLetter } from '@/helpers/textHelpers'

import './index.scss'

export default function SideNavigationMenu({ pageData }: TSideNavigationMenu) {
  const t = useTranslations()

  // const { currentPosition, setIsScrolling } = useSelector((state: RootState) => state.resroucesState)

  const { currentPosition, setIsScrolling } = usePageContext()

  const menuItemsRef = useRef<string[]>([])

  useLayoutEffect(() => {
    pageData.sections.forEach((sectionData) => {
      menuItemsRef.current.push(sectionData.key)
      sectionData.paragraphs.forEach((paragraphData) => {
        menuItemsRef.current.push(paragraphData.key)
      })
    })
    console.log('menuItemsRef', menuItemsRef)
  }, [])

  function handleOnClick(id: string) {
    document.getElementById(id)!.scrollIntoView({ block: 'start', behavior: 'smooth' })
    /* const element = document.getElementById(id);
    const offset = 45;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element!.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    document.getElementById('skills_content')!.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    }); */
    setIsScrolling(true)
  }

  useGSAP(() => {
    gsap.from('.sdm_item', {
      duration: 0.5,
      opacity: 0,
      y: 40,
      stagger: 0.1,
      delay: 1,
    })
  })

  return (
    <nav className='side_navigation_menu'>
      <p className='sdm_item sdm_on_this_page'>{t('LAYOUT.SIDE_NAVIGATION_MENU.ON_THIS_PAGE')}</p>
      <ol>
        {pageData.sections.map((sectionData) => {
          const translationPathRef = useRef<string>(
            `${pageData.translationKey}.SECTIONS.${sectionData.translationKey}`,
          )

          return (
            <li className='sdm_item sdm_section_li'>
              <a
                className={`sdm_a ${currentPosition === sectionData.key ? 'sdm_current' : menuItemsRef.current.indexOf(currentPosition) > menuItemsRef.current.indexOf(sectionData.key) ? 'read' : ''}`}
                onClick={() => handleOnClick(`${sectionData.key}_section`)}
              >
                {capitalizeFirstLetter(t(`${translationPathRef.current}.SECTION_TITLE`))}
              </a>
              <ol>
                {sectionData.paragraphs.map((paragraphData) => (
                  <li className='sdm_item sdm_paragraph_li'>
                    <a
                      className={`sdm_a sdm_paragraph_a ${currentPosition === paragraphData.key ? 'sdm_current' : menuItemsRef.current.indexOf(currentPosition) > menuItemsRef.current.indexOf(paragraphData.key) ? 'read' : ''}`}
                      onClick={() => handleOnClick(`${paragraphData.key}_paragraph`)}
                    >
                      {capitalizeFirstLetter(
                        t(
                          `${translationPathRef.current}.PARAGRAPHS.${paragraphData.translationKey}.PARAGRAPH_TITLE`,
                        ),
                      )}
                    </a>
                  </li>
                ))}
              </ol>
            </li>
          )
        })}
      </ol>
      <SdmScrollToTop elementId={`${pageData.key}_content`} />
    </nav>
  )
}
