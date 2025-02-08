import React from 'react'

import { GSAPTimelineProvider } from '@/contexts/GsapTimelineContext'

import { ContactCanvas } from '@/components/three/canvas'

import { timelineDefaultValues } from '@/data/contact/timelineData'

import './index.scss'

export default function index() {
  return (
    <div id='contact_page'>
      <section id='contact_section'>CONTACT</section>
      <GSAPTimelineProvider {...timelineDefaultValues}>
        <ContactCanvas />
      </GSAPTimelineProvider>
    </div>
  )
}
