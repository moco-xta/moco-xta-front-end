'use client'

import React, { useEffect, useState } from 'react'

import AboutCanvas from '@/components/r3f/canvas/about_canvas'

import './index.scss'

export default function AboutSlice() {
  const [showInstructions, setShowInstructions] = useState(true)

  function HandleShowInstructions() {
    setShowInstructions(!showInstructions)
  }

  useEffect(() => {
    console.log('TEST')
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
      <AboutCanvas />
      <div className='absolute centered cursor'>+</div>
      <div
        id='instructions'
        className={showInstructions ? 'show' : 'hide'}
      >
        Instructions
        <button
          id='button'
          onClick={HandleShowInstructions}
        >
          Click To Enter
        </button>
      </div>
    </section>
  )
}
