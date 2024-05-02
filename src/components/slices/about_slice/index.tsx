'use client'

import React, { useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'

import AboutDesktopCanvas from '@/components/r3f/canvas/about_canvas/AboutDesktopCanvas'
import AboutMobileCanvas from '@/components/r3f/canvas/about_canvas/AboutMobileCanvas'

import './index.scss'

export default function AboutSlice() {
  const [showInstructions, setShowInstructions] = useState(true)

  function HandleShowInstructions() {
    setShowInstructions(false)
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

  function handleKeyPress(e: KeyboardEvent) {
    console.log('event', e)
    if (e.code === 'Escape') setShowInstructions(true)
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress, false)
    document.addEventListener('keyup', handleKeyPress, false)
    return () => {
      window.removeEventListener('keydown', handleKeyPress, false)
      document.removeEventListener('keyup', handleKeyPress, false)
    }
  }, [])

  return (
    <section id='about_slice'>
      {!isMobile ? (
        <>
          <AboutDesktopCanvas />
          <div id='absolute centered cursor'>+</div>
        </>
      ) : (
        <AboutMobileCanvas />
      )}
    </section>
  )
}
