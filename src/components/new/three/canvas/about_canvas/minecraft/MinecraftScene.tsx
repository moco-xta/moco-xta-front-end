import React from 'react'

import Cubes from './Cubes'
import MinecraftGround from './MinecraftGround'

import { default as minecraftConstants } from '@/constants/new/canvas/about/minecraft/minecraftConstants.json'

export default function MinecraftScene() {
  return (
    <group position={[minecraftConstants.OFFSET.X, minecraftConstants.OFFSET.Y, minecraftConstants.OFFSET.Z]} scale={minecraftConstants.SCALE}>
      <Cubes />
      <MinecraftGround />
    </group>
  )
}
