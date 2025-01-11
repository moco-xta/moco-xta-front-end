import React from 'react'

import type { THeader } from '@/types/components/types'
import { MenuButton } from '@/components/buttons'

import LogoMoco from './logo_moco'

import './index.scss'

export default function Header({ isMain = false }: THeader) {
  return (
    <header className='header_zIndex'>
      <LogoMoco isMain={isMain} />
      <MenuButton state={isMain ? 'open' : 'close'} />
    </header>
  )
}
