import React, { useRef } from 'react'
import * as THREE from 'three'

import { Heart } from '../../models/contact/Heart'

export default function HeartComponent() {
  const heartComponentRef = useRef<THREE.Mesh>(null!)

  return (
    <Heart
      ref={heartComponentRef}
      position={new THREE.Vector3(0.5, -1, 0.25)}
      scale={0.33}
    />
  )
}
