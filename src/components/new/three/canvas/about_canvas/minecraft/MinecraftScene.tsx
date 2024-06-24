import React from 'react'
import { nanoid } from 'nanoid'

import { Cube } from './Cube'
import Ground from './Ground'
import Cubes from './Cubes'

export default function MinecraftScene() {
  return (
    <group
      position={[0, 0, 60]}
      scale={2}
    >
      <Cubes />
      <Ground />
    </group>
  )
}
