'use client'

import React from 'react'

import { Page } from '@/components/layout/pages'

import { ResourcesCanvas } from '@/components/three/canvas'

import { resourcesData } from '@/data/resources/resourcesData'

export default function Resources() {
  return (
    <Page
      pageData={resourcesData}
      backgroundCanvas={<ResourcesCanvas />}
    />
  )
}
