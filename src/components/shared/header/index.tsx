import React from 'react'

import { HeaderInterface } from '@/interfaces/componentsInterfaces'

import Logo from './logo'
import MenuButton from '@/components/buttons/menu_button'

import './index.scss'

export default function Header({ isMainHeader = false }: HeaderInterface) {
  return (
    <header>
      <Logo isMainLogo={isMainHeader} />
      <MenuButton type={isMainHeader ? 'open' : 'close'} />
    </header>
  )
}
