import React, { MutableRefObject } from 'react'

import { RoundedCube } from '@/components/r3f/models/rubiks_cube/RoundedCube'
import Pads from './pads'

interface CubeAndColorPadsInterface {
  colorPadIndex: MutableRefObject<number>
  coordinates: THREE.Vector3
}

export default function CubeGroup({
  colorPadIndex,
  coordinates,
}: CubeAndColorPadsInterface) {
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
