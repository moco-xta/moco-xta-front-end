import { Box } from '@react-three/drei'
import React from 'react'
import Ground from './Ground'

export default function MinecraftScene() {
  return (
    <group position={[0, 0, 60]} scale={2}>
      <Box />
      <Ground />
    </group>
  )
}
