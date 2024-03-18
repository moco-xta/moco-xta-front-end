'use client'

import React from 'react'

import PhotographyHeaderCanvas from '@/components/r3f/canvas/photography_header_canvas'

import './index.scss'

export default function PhotographySlice() {
  return (
    <section id='photography_slice'>
      <div id='photography_header_canvas'>
        <PhotographyHeaderCanvas />
      </div>
    </section>
  )
}
