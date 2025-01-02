import React from 'react'

import ResourcesCanvas from '@/components/three/canvas/resources/ResourcesCanvas'
import Introduction from './introduction'
import FrontEnd from './front_end'
import Graphics from './graphics'
import ThreeDimensional from './three_dimensional'
import BackEnd from './back_end'

import './index.scss'

export default function ResourcesPage() {
  return (
    <>
      <section
        id='resources_canvas'
        className='resources_canvas_zIndex'
      >
        <ResourcesCanvas />
      </section>
      <div
        id='resource_page'
        className='page'
      >
        <Introduction />
        <FrontEnd />
        <Graphics />
        <ThreeDimensional />
        <BackEnd />
      </div>
    </>
  )
}
