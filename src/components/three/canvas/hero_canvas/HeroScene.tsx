import React from 'react'

import useIsLargeScreen from '@/hooks/useIsLargeScreen'

import { default as LargeScreenBalloonsWrapper } from './large_screen/BalloonsWrapper'
import { default as LargeScreenHeliumBalloons } from './large_screen/HeliumBalloons'
import { default as SmallScreenBalloonsWrapper } from './small_screen/BalloonsWrapper'
import { default as SmallScreenHeliumBalloons } from './small_screen/HeliumBalloons'

export default function HeroScene() {
  const { isLargeScreen } = useIsLargeScreen()

  return (
    <>
      {isLargeScreen ? (
        <group>
          <LargeScreenBalloonsWrapper />
          <LargeScreenHeliumBalloons />
        </group>
      ) : (
        <group>
          <SmallScreenBalloonsWrapper />
          <SmallScreenHeliumBalloons />
        </group>
      )}
    </>
  )
}
