import React, { useRef } from 'react'

import { Lightning } from '@/components/three/models/home/hero/Lightning'

interface LightningComponentInterface {
  timeline: GSAPTimeline
}

export default function LightningComponent({ timeline }: LightningComponentInterface) {
  const lightningMeshRef = useRef<THREE.Mesh>(null!)

  return (
    <Lightning
      ref={lightningMeshRef}
      scale={2.5}
    />
  )
}
