import React from 'react'

import { Link } from '@/i18n/routing'

import LogoMocoCanvas from '@/components/three/canvas/logo_moco'

import { routesData } from '@/routes/routes'

import './index.scss'

export default function LogoMoco() {
  return (
    <div id='logo_moco'>
      <Link href={routesData.find((route) => route.translationKey === 'HOME')!.path}>
        <LogoMocoCanvas />
      </Link>
    </div>
  )
}
