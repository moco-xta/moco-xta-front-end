'use client'

import React from 'react'

import LogoMocoCanvas from '@/components/three/canvas/logo_moco/LogoMocoCanvas'
import LocaleSwitcherButton from '../buttons/locale_switcher_button'
import MenuButton from '../buttons/menu_button'
import ButtonsContents from './buttons_contents'

import { logoMocoData } from '@/data/logo_moco/three/logoMocoData'

import { getMatteMaterial } from '@/components/three/materials'

import './index.scss'

export default function Header() {
  return (
    <>
      <header
        id='header_logo'
        className='header_zIndex'
      >
        <LogoMocoCanvas logoMocoMaterial={getMatteMaterial(logoMocoData.material.color)} />
      </header>
      <header
        id='header_buttons'
        className='header_zIndex'
      >
        <LocaleSwitcherButton />
        <MenuButton />
      </header>
      <ButtonsContents />
    </>
  )
}
