import React, { useEffect, useState } from 'react'
import * as THREE from 'three'
import { useThree } from '@react-three/fiber'

import useIsMobile from '@/hooks/useIsMobile'

import Wrapper from '../wrapper'
import MocoHelium from '../moco_helium'

import { default as heroConstants } from '@/constants/canvas/heroConstants.json'

export default function HeroScene() {
  const { gl, viewport } = useThree()
  gl.toneMapping = THREE.ACESFilmicToneMapping
  gl.toneMappingExposure = 4

  const { dimensionsType } = useIsMobile()

  const [scaleRatio, setScaleRatio] = useState<number | null>(null)

  useEffect(() => {
    dimensionsType !== 'IS_MOBILE' ? setScaleRatio(3) : setScaleRatio(1.25)
  }, [dimensionsType])

  if(!dimensionsType) return null
  if(!scaleRatio) return null

  return (
    <group scale={viewport.width / scaleRatio}>
      <Wrapper />
      <MocoHelium />
    </group>
  )
}
