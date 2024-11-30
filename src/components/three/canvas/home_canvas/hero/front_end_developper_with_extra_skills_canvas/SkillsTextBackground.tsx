import React, { forwardRef } from 'react'
import { MeshProps } from '@react-three/fiber'
import { Box } from '@react-three/drei'

export const SkillsTextBackground = forwardRef<THREE.Mesh, MeshProps>(
  function SkillsTextBackground(props, ref) {
    return <Box ref={ref} />
  },
)
