import React from 'react'

import type { TResourcesContent, TResourcesSectionData } from '@/types/layout'

import Introduction from './introduction'
import { ResourcesSection } from '@/components/layout/sections'

import { default as resourcesConstants } from '@/constants/resources/resourcesConstants.json'

import './index.scss'

export default function Content({ setCurrentSection }: TResourcesContent) {
  return (
    <div id='resources_content'>
      <Introduction />
      {resourcesConstants.map((sectionData) => (
        <ResourcesSection
          key={`resource_section_${sectionData.key}`}
          sectionData={sectionData as unknown as TResourcesSectionData}
          setCurrentSection={setCurrentSection}
        />
      ))}
    </div>
  )
}
