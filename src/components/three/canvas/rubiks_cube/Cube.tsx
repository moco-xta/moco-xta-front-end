import React from 'react'

import type { TCube } from '@/types/components/three/types'

import { BaseCube } from '../../models/rubiks_cube/BaseCube'
import Pads from './Pads'

export default function Cube({ coordinates, padIndexRef }: TCube) {
  return (
    <group position={coordinates}>
      <BaseCube />
      <Pads
        coordinates={coordinates}
        padIndexRef={padIndexRef}
      />
    </group>
  )
}
