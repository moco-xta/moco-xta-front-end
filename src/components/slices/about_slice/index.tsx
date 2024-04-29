'use client'

import React, { useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'
import { useTranslations } from 'next-intl'

import AboutCanvas from '@/components/r3f/canvas/about_canvas/AboutCanvas'

import './index.scss'

export default function AboutSlice() {
  const t = useTranslations('ABOUT')

  const [showInstructions, setShowInstructions] = useState(true)

  function HandleShowInstructions() {
    setShowInstructions(!showInstructions)
  }

  useEffect(() => {
    document.addEventListener(
      'HandleShowInstructions',
      HandleShowInstructions,
      false,
    )
    return () => {
      document.removeEventListener(
        'HandleShowInstructions',
        HandleShowInstructions,
        false,
      )
    }
  })

  return (
    <section id='about_slice'>
      {!isMobile ? (
        <>
          <AboutCanvas />
          <div id='absolute centered cursor'>+</div>
          <div
            id='instructions'
            className={showInstructions ? 'show' : 'hide'}
          >
            {t('INSTRUCTIONS')}
            <button
              id='button'
              onClick={HandleShowInstructions}
            >
              {t('CLICK_TO_ENTER')}
            </button>
          </div>
        </>
      ) : (
        <AboutCanvas />
      )}
    </section>
  )
}
