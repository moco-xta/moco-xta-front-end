import React, { useState } from 'react'

import ResourcesCanvas from '@/components/three/canvas/resources/ResourcesCanvas'
import Content from './content'

import './index.scss'
import Menu from './menu'

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
        className='resource_page_zIndex'
      >
        <Menu />
        <Content />
      </div>
    </>
  )
}
