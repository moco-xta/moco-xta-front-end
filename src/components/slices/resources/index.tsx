import React from 'react'

import ResourcesCanvas from '@/components/three/canvas/resources/ResourcesCanvas'
import Menu from './menu'
import Content from './content'

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
        className='resource_page_zIndex'
      >
        <Menu />
        <Content />
      </div>
    </>
  )
}
