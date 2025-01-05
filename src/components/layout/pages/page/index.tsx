import React from 'react'

import type { TPage } from '@/types/layout'

import { PageProvider } from 'contexts/PageContext'

import { SideNavigationMenu } from '../../menus'
import { PageContent } from '../../content'

import './index.scss'

export default function Page({ pageData }: TPage) {
  return (
    <PageProvider defaultPosition={pageData.sections[0].key}>
      <div className='page_container'>
        <div className='page'>
          <SideNavigationMenu pageData={pageData} />
          <PageContent pageData={pageData} />
        </div>
      </div>
    </PageProvider>
  )
}
