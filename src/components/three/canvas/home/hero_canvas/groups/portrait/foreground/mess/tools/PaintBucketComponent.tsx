import React, { useRef } from 'react'
import * as THREE from 'three'

import { PaintBucket } from '@/components/three/models/home/hero/portrait/PaintBucket'

export default function PaintBucketComponent() {
  const paintBucketRef = useRef<THREE.Group>(null!)

  return (
    <PaintBucket
      ref={paintBucketRef}
      position={new THREE.Vector3(0, 2, 0)}
    />
  )
}
