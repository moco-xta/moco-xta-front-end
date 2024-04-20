import React from 'react'
import * as THREE from 'three'
import { useThree } from '@react-three/fiber'

import Wrapper from '../wrapper'
import MocoHelium from '../moco_helium'

import { default as heroConstants } from '@/constants/canvas/heroConstants.json'

export default function HeroScene() {
  const { gl } = useThree()
  gl.toneMapping = THREE.ACESFilmicToneMapping
  gl.toneMappingExposure = 4

  return (
    <group
      position={[
        heroConstants.MOCO_HELIUM.GROUP.POSITION.X,
        heroConstants.MOCO_HELIUM.GROUP.POSITION.Y,
        heroConstants.MOCO_HELIUM.GROUP.POSITION.Z,
      ]}
    >
      <Wrapper />
      <MocoHelium />
    </group>
  )
}
