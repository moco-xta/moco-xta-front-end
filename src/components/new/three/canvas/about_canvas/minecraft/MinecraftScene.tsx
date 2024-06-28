import React from 'react'

import Cubes from './Cubes'
import MinecraftGround from './MinecraftGround'

import { default as minecraftConstants } from '@/constants/new/canvas/about/minecraft/minecraftConstants.json'
import { Box } from '@react-three/drei'

export default function MinecraftScene() {
  return (
    <group
      position={[minecraftConstants.OFFSET[0], minecraftConstants.OFFSET[1], minecraftConstants.OFFSET[2]]}
      scale={minecraftConstants.SCALE}
    >
      <Cubes />
      <MinecraftGround />
      <Box scale={minecraftConstants.SCALE} />
    </group>
  )
}
