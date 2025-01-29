import React from 'react'

import { /* ContactCanvas,  */ PlaygroundCanvas } from '@/components/three/canvas'

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
