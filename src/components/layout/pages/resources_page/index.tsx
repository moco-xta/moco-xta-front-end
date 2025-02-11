import React from 'react'

import type { TResourcesPage } from '@/types/components/layout/types'

import { PageProvider } from '@/contexts/PageContext'

import { SideNavigationMenuLeft, SideNavigationMenuRight } from '../page/menus'
import { PageContent } from '../page/contents'

import './index.scss'

export default function ResourcesPage({
  resourcesPageData,
  extraButtons,
  backgroundCanvas,
}: TResourcesPage) {
  return (
    <>
      {backgroundCanvas && <div id='background_canvas'>{backgroundCanvas}</div>}
      <PageProvider pageData={resourcesPageData}>
        <div className='page_container'>
          <div className='page'>
            <SideNavigationMenuLeft
              pageData={resourcesPageData}
              extraButtons={extraButtons}
            />
            <PageContent pageData={resourcesPageData} />
            <SideNavigationMenuRight pageData={resourcesPageData} />
          </div>
        </div>
      </PageProvider>
    </>
  )
}
