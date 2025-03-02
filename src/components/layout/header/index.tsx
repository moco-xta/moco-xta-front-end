'use client'

import React from 'react'

import LogoMocoCanvas from '@/components/three/canvas/logo_moco/LogoMocoCanvas'

import { logoMocoData } from '@/data/canvas/logo_moco/logoMocoData'

import { getMatteMaterial } from '@/components/three/materials'

import './index.scss'

export default function Header() {
  return (
    <header className='header_zIndex'>
      <LogoMocoCanvas logoMocoMaterial={getMatteMaterial(logoMocoData.material.color)} />
    </header>
  )
}
