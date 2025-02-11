'use client'

import React from 'react'

import ResourcesPage from '@/components/layout/pages/resources_page'
import { ResourcesCanvas } from '@/components/three/canvas'

import { resourcesData } from '@/data/resources/resourcesData'
// import { skillsData } from '@/data/skills/skillsData'

export default function Resources() {
  return (
    <ResourcesPage
      pageData={resourcesData}
      backgroundCanvas={<ResourcesCanvas />}
    />
  )
}
