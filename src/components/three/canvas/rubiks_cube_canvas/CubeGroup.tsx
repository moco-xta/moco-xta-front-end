import React from 'react'

import { CubeInterface } from '@/interfaces/rubiksCubeInterfaces'

import { RoundedCube } from './RoundedCube'
import Pads from './Pads'

export default function CubeGroup({ coordinates, colorPadIndex }: CubeInterface) {
  return (
    <group position={coordinates}>
      <RoundedCube />
      <Pads
        colorPadIndex={colorPadIndex}
        coordinates={coordinates}
      />
    </group>
  )
}
