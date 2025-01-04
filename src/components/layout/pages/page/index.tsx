import React from 'react'

import type { TPage } from '@/types/layout'

import SideNavigationMenu from '../../menus/side_navigation_menu'

import './index.scss'

export default function Page({ children }: TPage) {
  return (
    <div className='page_container'>
      <div className='page'>
        <SideNavigationMenu />
        {children}
      </div>
    </div>
  )
}
