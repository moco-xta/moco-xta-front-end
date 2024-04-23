import React, { useEffect, useState } from 'react'
import { useThree } from '@react-three/fiber'

import useIsMobile from '@/hooks/useIsMobile'

import BalloonsWrapper from './BalloonsWrapper'
import HeliumBalloons from './HeliumBalloons'

import { default as heroConstants } from '@/constants/canvas/heroConstants.json'

export default function HeroScene() {
  const { viewport } = useThree()

  const { dimensionsType } = useIsMobile()

  const [scaleRatio, setScaleRatio] = useState<number | null>(null)

  useEffect(() => {
    dimensionsType !== 'IS_MOBILE'
      ? setScaleRatio(heroConstants.HELIUM_BALLOONS.SCALE_RATIO.IS_NOT_MOBILE)
      : setScaleRatio(heroConstants.HELIUM_BALLOONS.SCALE_RATIO.IS_MOBILE)
  }, [dimensionsType])

  if (!dimensionsType) return null
  if (!scaleRatio) return null

  return (
    <group scale={viewport.width / scaleRatio}>
      <BalloonsWrapper />
      <HeliumBalloons />
    </group>
  )
}
