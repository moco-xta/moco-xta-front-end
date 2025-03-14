'use client'

import React from 'react'

import LogoMocoCanvas from '@/components/three/canvas/logo_moco/LogoMocoCanvas'
import LocaleSwitcherButton from '../buttons/locale_switcher_button'
import MenuButton from '../buttons/menu_button'
import ButtonsContent from './buttons_content'

import { logoMocoData } from '@/data/logo_moco/three/logoMocoData'

import { getMatteMaterial } from '@/components/three/materials'

import './index.scss'

export default function Header() {
  return (
    <>
      <header className='header_zIndex'>
        <LogoMocoCanvas logoMocoMaterial={getMatteMaterial(logoMocoData.material.color)} />
        <div id='header_buttons'>
          <LocaleSwitcherButton />
          <MenuButton />
        </div>
      </header>
      <ButtonsContent />
    </>
  )
}
