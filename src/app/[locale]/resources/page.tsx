'use client'

import React from 'react'

import { usePathname } from '@/i18n/routing'

import ResourcesPage from '@/components/layout/pages/resources_page'
import { ResourcesCanvas } from '@/components/three/canvas'
import Disclamer from '@/components/layout/disclamer'

import { resourcesPageData } from '@/data/resources/resourcesData'

export default function Resources() {
  const pathname = usePathname()

  return (
    <>
      <ResourcesPage
        resourcesPageData={resourcesPageData}
        backgroundCanvas={<ResourcesCanvas />}
      />
      {pathname === '/resources' && <Disclamer translationKey={'RESOURCES'} />}
    </>
  )
}
