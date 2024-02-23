'use client'

import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import studio from '@theatre/studio'
import extension from '@theatre/r3f/dist/extension'

import Content from '@/components/r3f/scenes/skills_scene/content'

studio.extend(extension)
studio.initialize()

export default function SkillsScene() {
  return (
    <Canvas>
      <OrbitControls />
      <Content />
    </Canvas>
  )
}
