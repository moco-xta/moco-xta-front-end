import React from 'react'

import LogoMocoCanvas from '@/components/three/canvas/logo_moco/LogoMocoCanvas'

import { logoMocoData } from '@/data/header/logo_moco/three/logoMocoData'

import { getMatteMaterial } from '@/components/three/materials'

export default function Hero() {
  return (
    <div>
      <LogoMocoCanvas logoMocoMaterial={getMatteMaterial(logoMocoData.material.color)} />
    </div>
  )
}
