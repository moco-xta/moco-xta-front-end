import React, { useEffect, useState } from 'react'
import * as THREE from 'three'
import { useThree } from '@react-three/fiber'

import useIsMobile from '@/hooks/useIsMobile'

import ToneMapping from './ToneMapping'
import BalloonsWrapper from './BalloonsWrapper'
import HeliumBalloons from './HeliumBalloons'

import { default as heroConstants } from '@/constants/canvas/heroConstants.json'

export default function HeroScene() {
  const { viewport } = useThree()
  const { dimensionsType } = useIsMobile()

  const [scaleRatio, setScaleRatio] = useState<number | null>(null)

  useEffect(() => {
    dimensionsType !== 'IS_MOBILE' ? setScaleRatio(3) : setScaleRatio(1.25)
  }, [dimensionsType])

  if(!dimensionsType) return null
  if(!scaleRatio) return null

  return (
    <>
      <ToneMapping />
      {dimensionsType !== 'IS_MOBILE' ? (
        <group scale={viewport.width / scaleRatio}>
          <BalloonsWrapper
            position={new THREE.Vector3(
              heroConstants.MOCO_HELIUM.BALLOONS_WRAPPER.POSITION.IS_NOT_MOBILE.X,
              heroConstants.MOCO_HELIUM.BALLOONS_WRAPPER.POSITION.IS_NOT_MOBILE.Y,
              heroConstants.MOCO_HELIUM.BALLOONS_WRAPPER.POSITION.IS_NOT_MOBILE.Z,
            )}
            dimensionsType={'IS_NOT_MOBILE'}
          />
          <HeliumBalloons />
        </group>
      ) : (
        <group scale={viewport.width / scaleRatio}>
          <BalloonsWrapper
            position={new THREE.Vector3(
              heroConstants.MOCO_HELIUM.BALLOONS_WRAPPER.POSITION.IS_MOBILE.UP.X,
              heroConstants.MOCO_HELIUM.BALLOONS_WRAPPER.POSITION.IS_MOBILE.UP.Y,
              heroConstants.MOCO_HELIUM.BALLOONS_WRAPPER.POSITION.IS_MOBILE.UP.Z,
            )}
            dimensionsType={'IS_MOBILE'}
          />
          <BalloonsWrapper
            position={new THREE.Vector3(
              heroConstants.MOCO_HELIUM.BALLOONS_WRAPPER.POSITION.IS_MOBILE.DOWN.X,
              heroConstants.MOCO_HELIUM.BALLOONS_WRAPPER.POSITION.IS_MOBILE.DOWN.Y,
              heroConstants.MOCO_HELIUM.BALLOONS_WRAPPER.POSITION.IS_MOBILE.DOWN.Z,
            )}
            dimensionsType={'IS_MOBILE'}
          />
          <HeliumBalloons />
        </group>
      )}
    </>
  )
}
