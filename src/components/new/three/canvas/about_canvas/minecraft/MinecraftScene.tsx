import React from 'react'

import Ground from './Ground'
import Cubes from './Cubes'

export default function MinecraftScene() {
  return (
    <group/*  position={[0, 0, 60]} */>
      <Cubes />
      <Ground />
    </group>
  )
}
