import React from 'react'

import type { THeader } from '@/types/components/types'
import { LocaleSwitcher, MenuButton } from '@/components/layout/buttons'

import LogoMoco from './logo_moco'

import './index.scss'

export default function Header({ isMain = false }: THeader) {
  return (
    <header className='header_zIndex'>
      <LogoMoco isMain={isMain} />
      <div className='header_buttons_container'>
        <MenuButton state={isMain ? 'open' : 'close'} />
        <LocaleSwitcher />
      </div>
    </header>
  )
}
