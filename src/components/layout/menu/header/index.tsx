import React from 'react'
import { isMobile } from 'react-device-detect'

import type { THeader } from '@/types/components/types'
import { LocaleSwitcher, MenuButton } from '@/components/layout/buttons'

import LogoMoco from './logo_moco'

import './index.scss'

export default function Header({ isMain = false, logoMocoMaterial }: THeader) {
  return (
    <header className='header_zIndex'>
      <LogoMoco
        isMain={isMain}
        logoMocoMaterial={logoMocoMaterial}
        className={!isMobile ? 'logo_moco_large' : 'logo_moco_small'}
      />

      <div className='header_buttons_container'>
        <LocaleSwitcher />
        {!isMobile && <MenuButton state={isMain ? 'open' : 'close'} />}
      </div>
    </header>
  )
}
