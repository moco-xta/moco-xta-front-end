import React, { useEffect, useState } from 'react'
import { useThree } from '@react-three/fiber'

import BalloonsWrapper from './BalloonsWrapper'
import HeliumBalloons from './HeliumBalloons'

import { default as heroConstants } from '@/constants/new/canvas/heroConstants.json'

export default function HeroScene() {
  const { viewport } = useThree()

  return (
    <group
      scale={
        viewport.width / heroConstants.HELIUM_BALLOONS.SCALE_RATIO.IS_NOT_MOBILE
      }
    >
      <BalloonsWrapper />
      <HeliumBalloons />
    </group>
  )
}
