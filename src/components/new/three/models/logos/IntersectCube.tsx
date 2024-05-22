import React from 'react'
import * as THREE from 'three'

import { IntersectCubeInterface } from '@/interfaces/new/threeInterfaces'

export default function IntersectCube({
  handleOnPointerMove,
  handleOnPointerLeave,
}: IntersectCubeInterface) {
  const intersectGeometry = new THREE.BoxGeometry()
  intersectGeometry.computeBoundingBox()
  const intersectMaterial = new THREE.MeshBasicMaterial()
  intersectMaterial.visible = false

  return (
    <mesh
      geometry={intersectGeometry}
      material={intersectMaterial}
      onPointerMove={handleOnPointerMove}
      onPointerOut={handleOnPointerLeave}
    />
  )
}
