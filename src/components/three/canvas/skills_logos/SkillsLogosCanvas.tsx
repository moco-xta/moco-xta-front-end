import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'

import Camera from './Camera'
import Lights from './Lights'
import SkillsLogosScene from './SkillsLogosScene'

import { canvasDefaultValues } from '@/data/skills/three/skills_logo/canvasData'

export default function SkillsLogosCanvas() {
  return (
    <Canvas {...canvasDefaultValues}>
      <Camera />
      <Lights />
        <SkillsLogosScene />
    </Canvas>
  )
}
