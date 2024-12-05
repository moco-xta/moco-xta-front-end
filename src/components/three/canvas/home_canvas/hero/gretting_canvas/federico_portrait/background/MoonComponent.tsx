import React, { useRef } from 'react'
import { MeshProps } from '@react-three/fiber'

import { Moon } from '@/components/three/models/home/hero/gobelino/Moon'

export default function MoonComponent(props: MeshProps) {
  const moonComponentMeshRef = useRef<THREE.Mesh>(null!)

  return (
    <Moon
      ref={moonComponentMeshRef}
      {...props}
    />
  )
}
