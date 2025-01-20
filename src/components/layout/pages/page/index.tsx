import React, { useEffect } from 'react'

import type { TPage } from '@/types/components/layout/types'

import { PageProvider } from '@/contexts/PageContext'

import { SideNavigationMenuLeft, SideNavigationMenuRight } from './menus'
import { PageContent } from './contents'

import './index.scss'

export default function Page({
  pageData,
  displayPage = true,
  extraButtons,
  backgroundCanvas,
}: TPage) {
  useEffect(() => {
    const contentElement = document.getElementById(`${pageData.key}_content`)
    if (contentElement) {
      contentElement.scrollIntoView({ block: 'start', behavior: 'smooth' })
    }
  })

  return (
    <>
      {backgroundCanvas && <div id='background_canvas'>{backgroundCanvas}</div>}
      {displayPage && (
        <PageProvider pageData={pageData}>
          <div className='page_container'>
            <div className='page'>
              <SideNavigationMenuLeft
                pageData={pageData}
                extraButtons={extraButtons}
              />
              <PageContent pageData={pageData} />
              <SideNavigationMenuRight pageData={pageData} />
            </div>
          </div>
        </PageProvider>
      )}
    </>
  )
}
