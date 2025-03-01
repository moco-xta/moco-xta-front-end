import React from 'react'
import { Canvas } from '@react-three/fiber'

import type { TSkillLogoCanvas } from '@/types/components/three/types'

import Camera from './Camera'
import Lights from './Lights'
import SkillLogo from './SkillLogo'

import { canvasDefaultValues } from '@/data/skills/skill_logo/three/canvasData'

export default function SkillLogoCanvas({ logoData }: TSkillLogoCanvas) {
  return (
    <Canvas {...canvasDefaultValues}>
      <Camera />
      <Lights />
      <SkillLogo logoData={logoData} />
    </Canvas>
  )
}
