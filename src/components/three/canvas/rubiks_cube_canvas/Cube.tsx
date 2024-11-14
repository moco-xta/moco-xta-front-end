import React from 'react'

import { CubeInterface } from '@/interfaces/rubiksCubeInterfaces'
import { RoundedCube } from './RoundedCube'

export default function Cube({ coordinates }: CubeInterface) {
  return (
    <group position={coordinates}>
      <RoundedCube />
    </group>
  )
}
