import React from 'react'

import type { TPage } from '@/types/components/layout/types'

import { PageProvider } from '@/contexts/PageContext'

import { SideNavigationMenu } from './menus'
import { PageContent } from './contents'

import './index.scss'

export default function Page({ pageData, displayPage = true, extraButtons, backgroundCanvas }: TPage) {
  return (
    <>
      {backgroundCanvas && <div id='background_canvas'>{backgroundCanvas}</div>}
      {displayPage && <PageProvider defaultPosition={pageData.sections[0].key}>
        <div className='page_container'>
          <div className='page'>
            <SideNavigationMenu
              pageData={pageData}
              extraButtons={extraButtons}
            />
            <PageContent pageData={pageData} />
          </div>
        </div>
      </PageProvider>}
    </>
  )
}
