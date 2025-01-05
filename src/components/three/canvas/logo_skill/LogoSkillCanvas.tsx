import React from 'react'
import { Canvas } from '@react-three/fiber'

import type { TSkillsCanvas } from '@/types/three/skills/types'

import Camera from './Camera'
import Lights from './Lights'
import SkillsLogo from './SkillsLogo'

import { canvasDefaultValues } from '@/data/skills/three/canvasData'

export default function LogoSkillCanvas({ logoData }: TSkillsCanvas) {
  return (
    <Canvas {...canvasDefaultValues}>
      <Camera />
      <Lights />
      <SkillsLogo logoData={logoData} />
    </Canvas>
  )
}
