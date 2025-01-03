import React from 'react'

import type { TResourcesSectionData } from '@/types/layout'

import Introduction from './introduction'
import { ResourcesSection } from '@/components/layout/sections'

import { default as resourcesConstants } from '@/constants/resources/resourcesConstants.json'

import './index.scss'

export default function Content() {
  return (
    <div
      id='resources_content'
      data-lenis-prevent
    >
      <Introduction />
      {resourcesConstants.map((sectionData) => (
        <ResourcesSection
          key={`resource_section_${sectionData.key}`}
          sectionData={sectionData as unknown as TResourcesSectionData}
        />
      ))}
    </div>
  )
}

// https://github.com/darkroomengineering/lenis?tab=readme-ov-file#considerations
