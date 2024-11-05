import React from 'react'

import CylenderWorkShowcaseCanvas from '@/components/three/canvas/cylender_work_showcase_canvas/CylenderWorkShowcaseCylenderWorkShowcaseCanvas'

import './index.scss'

export default function CylenderWorkShowcase() {
  return (
    <section
      id='cylender_work_showcase_slice'
      className='fullscreen'
    >
      <CylenderWorkShowcaseCanvas />
    </section>
  )
}
