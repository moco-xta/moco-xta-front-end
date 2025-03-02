'use client'

import React from 'react'

import LogoMocoCanvas from '@/components/three/canvas/logo_moco/LogoMocoCanvas'

import { logoMocoData } from '@/data/header/logo_moco/three/logoMocoData'

import { getMatteMaterial } from '@/components/three/materials'

import './index.scss'

export default function Header() {
  return (
    <div className='header_zIndex'>
      <LogoMocoCanvas logoMocoMaterial={getMatteMaterial(logoMocoData.material.color)} />
    </div>
  )
}
