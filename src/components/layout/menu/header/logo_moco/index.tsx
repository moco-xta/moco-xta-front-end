import React from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import type { TLogoMoco } from '@/types/components/types'

import { Link } from '@/i18n/routing'

import { LogoMocoCanvas } from '@/components/three/canvas'

import { routesData } from '@/routes/routes'
import { logoMocoData } from '@/data/menu/header/logo_moco/three/logoMocoData'

import './index.scss'

export default function LogoMoco({ isMain = false }: TLogoMoco) {
  useGSAP(() => {
    if (isMain) gsap.from(logoMocoData.animations.selector, logoMocoData.animations.params)
  })

  return (
    <div id={`${isMain ? 'main_' : ''}logo_moco`}>
      <Link href={routesData.find((route) => route.translationKey === 'HOME')!.path}>
        <LogoMocoCanvas />
      </Link>
    </div>
  )
}
