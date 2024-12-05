import React, { useRef } from 'react'
import { MeshProps } from '@react-three/fiber'

import { Sun } from '@/components/three/models/home/hero/gobelino/Sun'

export default function SunComponent(props: MeshProps) {
  const sunComponentMeshRef = useRef<THREE.Mesh>(null!)

  return (
    <Sun
      ref={sunComponentMeshRef}
      {...props}
    />
  )
}
