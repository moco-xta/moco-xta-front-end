import React from 'react'

import { GSAPTimelineProvider } from '@/contexts/GsapTimelineContext'

import { ContactCanvas } from '@/components/three/canvas'
import SocialsCanvas from '@/components/three/canvas/socials_canvas/SocialsCanvas'

import { timelineDefaultValues } from '@/data/contact/timelineData'

import './index.scss'

export default function index() {
  return (
    <div id='contact_page'>
      <section id='contact_section'>
        <SocialsCanvas className='contact_socials_canvas' />
      </section>
      <GSAPTimelineProvider {...timelineDefaultValues}>
        <ContactCanvas />
      </GSAPTimelineProvider>
    </div>
  )
}
