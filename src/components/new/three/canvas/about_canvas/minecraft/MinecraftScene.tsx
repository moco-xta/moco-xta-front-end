import React from 'react'

import MinecraftCubes from './MinecraftCubes'
import MinecraftGround from './MinecraftGround'

import { default as minecraftConstants } from '@/constants/new/canvas/about/minecraft/minecraftConstants.json'

export default function MinecraftScene() {
  return (
    <group
      position={[minecraftConstants.OFFSET[0], minecraftConstants.OFFSET[1], minecraftConstants.OFFSET[2]]}
      scale={minecraftConstants.SCALE}
    >
      <MinecraftCubes />
      <MinecraftGround />
    </group>
  )
}
