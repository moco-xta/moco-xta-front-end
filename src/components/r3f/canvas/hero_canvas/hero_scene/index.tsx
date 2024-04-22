import React from 'react'
import * as THREE from 'three'
import { useThree } from '@react-three/fiber'

import Wrapper from '../wrapper'
import MocoHelium from '../moco_helium'

import { default as heroConstants } from '@/constants/canvas/heroConstants.json'

export default function HeroScene() {
  const { gl, viewport } = useThree()
  gl.toneMapping = THREE.ACESFilmicToneMapping
  gl.toneMappingExposure = 4

  return (
    <group scale={[viewport.width / 3, viewport.width / 3, viewport.width / 3]}>
      <Wrapper />
      <MocoHelium />
    </group>
  )
}
