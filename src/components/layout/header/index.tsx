'use client'

import React from 'react'

import LogoMocoCanvas from '@/components/three/canvas/logo_moco/LogoMocoCanvas'
import Menu from './menu'

import { logoMocoData } from '@/data/logo_moco/three/logoMocoData'

import { getMatteMaterial } from '@/components/three/materials'

import './index.scss'
import LocaleSwitcher from './locale_switcher'

export default function Header() {
  return (
    <header className='header_zIndex'>
      <LogoMocoCanvas logoMocoMaterial={getMatteMaterial(logoMocoData.material.color)} />
      <div id='header_buttons'>
        <LocaleSwitcher />
        <Menu />
      </div>
    </header>
  )
}
