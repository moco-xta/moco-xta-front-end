import React from 'react'
import * as THREE from 'three'

import { IntersectCubeInterface } from '@/interfaces/new/rubiksCubeInterfaces'

export default function IntersectCube({ handleOnPointerMove, handleOnPointerLeave }: IntersectCubeInterface) {
  const intersectGeometry = new THREE.BoxGeometry(2, 2, 0.4)
  intersectGeometry.computeBoundingBox()

  const intersectMaterial = new THREE.MeshBasicMaterial({
    color: 'red',
    visible: false,
  })

  return (
    <mesh
      geometry={intersectGeometry}
      material={intersectMaterial}
      onPointerMove={handleOnPointerMove}
      onPointerOut={handleOnPointerLeave}
    />
  )
}
