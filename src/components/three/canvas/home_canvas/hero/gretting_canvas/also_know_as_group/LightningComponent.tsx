import React, { useRef } from 'react'

import { Lightning } from '@/components/three/models/home/hero/Lightning'

export default function LightningComponent() {
  const lightningMeshRef = useRef<THREE.Mesh>(null!)

  return (
    <Lightning
      ref={lightningMeshRef}
      scale={2.5}
    />
  )
}
