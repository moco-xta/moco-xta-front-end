import React from 'react'

import useResize from '@/hooks/new/useResize'

import DesktopBalloonsWrapper from './DesktopBalloonsWrapper'
import DesktopHeliumBalloons from './DesktopHeliumBalloons'
import MobileBalloonsWrapper from './MobileBalloonsWrapper'
import MobileHeliumBalloons from './MobileHeliumBalloons'

export default function HeroScene() {
  const { isDesktop } = useResize()

  return (
    <>
      {isDesktop ? (
        <group>
          <DesktopBalloonsWrapper />
          <DesktopHeliumBalloons />
        </group>
      ): (
        <group>
          <MobileBalloonsWrapper />
          <MobileHeliumBalloons />
        </group>
      )}
    </>
  )
}
