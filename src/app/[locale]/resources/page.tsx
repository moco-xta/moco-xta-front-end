'use client'

import React from 'react'

import { Page } from '@/components/layout/pages'

import { RubiksCubeCanvas } from '@/components/three/canvas'

import { resourcesData } from '@/data/resourcess/resourcessData'

export default function Resources() {
  return (
    <Page
      pageData={resourcesData}
      backgroundCanvas={<RubiksCubeCanvas />}
    />
  )
}
