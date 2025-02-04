import React from 'react'

import {} from /* ContactCanvas,  */ '@/components/three/canvas'
import { PlaygroundCanvas } from '@/components/three/canvas/playground'

import './index.scss'

export default function index() {
  return (
    <div id='contact_page'>
      <section id='contact_section'>CONTACT SECTION</section>
      {/* <ContactCanvas /> */}
      <PlaygroundCanvas />
    </div>
  )
}
