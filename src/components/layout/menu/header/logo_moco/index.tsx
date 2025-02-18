import React from 'react'
import { useDispatch } from 'react-redux'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import type { TLogoMoco } from '@/types/components/types'

import { Link } from '@/i18n/routing'

import { AppDispatch } from '@/redux/store'
import { setLocaleSwitcherIsOpen, setMenuIsOpen } from '@/redux/slices/appStateSlice'

import { LogoMocoCanvas } from '@/components/three/canvas'

import { routesData } from '@/routes/routes'
import { logoMocoData } from '@/data/menu/header/logo_moco/three/logoMocoData'

import './index.scss'

export default function LogoMoco({ isMain = false, logoMocoMaterial, className }: TLogoMoco) {
  const dispatch = useDispatch<AppDispatch>()

  const handleOnClickLogoMoco = () => {
    dispatch(setMenuIsOpen(false))
    dispatch(setLocaleSwitcherIsOpen(false))
  }

  useGSAP(() => {
    if (isMain) gsap.from(logoMocoData.animations.selector, logoMocoData.animations.params)
  })

  return (
    <div
      id={`${isMain ? 'main_' : ''}logo_moco`}
      className={className}
      onClick={handleOnClickLogoMoco}
    >
      <Link href={routesData.find((route) => route.translationKey === 'HOME')!.path}>
        <LogoMocoCanvas logoMocoMaterial={logoMocoMaterial} />
      </Link>
    </div>
  )
}
