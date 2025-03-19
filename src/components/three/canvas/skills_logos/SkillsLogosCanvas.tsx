import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Box } from '@react-three/drei'

import Camera from './Camera'
import Lights from './Lights'

import { canvasDefaultValues } from '@/data/skills/three/skills_logo/canvasData'

export default function SkillsLogosCanvas() {
  return (
    <Canvas {...canvasDefaultValues}>
      <Camera />
      <Lights />
      <Box />
    </Canvas>
  )
}
