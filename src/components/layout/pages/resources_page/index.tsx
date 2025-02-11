import React from 'react'

import type { TResourcesPage } from '@/types/components/layout/types'

import { PageProvider } from '@/contexts/PageContext'
import { SideNavigationMenuLeft, SideNavigationMenuRight } from '../page/menus'

import './index.scss'
import ResourcesPageContent from './contents'

export default function ResourcesPage({
  pageData,
  extraButtons,
  backgroundCanvas,
}: TResourcesPage) {
  return (
    <>
      {backgroundCanvas && <div id='background_canvas'>{backgroundCanvas}</div>}
      <PageProvider pageData={pageData}>
        <div className='page_container'>
          <div className='page'>
            <SideNavigationMenuLeft
              pageData={pageData}
              extraButtons={extraButtons}
            />
            <ResourcesPageContent pageData={pageData} />
            <SideNavigationMenuRight pageData={pageData} />
          </div>
        </div>
      </PageProvider>
    </>
  )
}
