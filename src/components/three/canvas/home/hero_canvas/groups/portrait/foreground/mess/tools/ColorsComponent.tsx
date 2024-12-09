import React, { useRef } from 'react'

import { Colors } from '@/components/three/models/home/hero/portrait/Colors'

interface ColorsComponentInterface {
  timeline: GSAPTimeline
}

export default function ColorsComponent({ timeline }: ColorsComponentInterface) {
  const colorsComponentRef = useRef<THREE.Group>(null!)

  return (
    <Colors
      ref={colorsComponentRef}
      position={[1, -3, 0.2]}
      scale={0.5}
    />
  )
}
