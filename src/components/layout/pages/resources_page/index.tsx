import React from 'react'

import type { TResourcesPage } from '@/types/components/layout/types'

import { ResourcesPageProvider } from '@/contexts/ResourcesPageContext'
import { SideNavigationMenuLeft } from './menus'
import ResourcesPageContent from './contents'

import './index.scss'

export default function ResourcesPage({
  resourcesPageData,
  extraButtons,
  backgroundCanvas,
}: TResourcesPage) {
  return (
    <>
      {backgroundCanvas && <div id='background_canvas'>{backgroundCanvas}</div>}
      <ResourcesPageProvider resourcesPageData={resourcesPageData}>
        <div className='page_container'>
          <div className='page'>
            <SideNavigationMenuLeft
              pageData={resourcesPageData}
              extraButtons={extraButtons}
            />
            <ResourcesPageContent resourcesPageData={resourcesPageData} />
          </div>
        </div>
      </ResourcesPageProvider>
    </>
  )
}
