import React from 'react'

import { CubeAndColorPadsInterface } from '@/interfaces/rubiksCubeInterfaces'

import { RoundedCube } from '../../models/rubiks_cube/RoundedCube'
import Pads from './Pads'

export default function CubeGroup({ colorPadIndex, coordinates }: CubeAndColorPadsInterface) {
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
