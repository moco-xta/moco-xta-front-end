import React from 'react'
import * as THREE from 'three'

import { Trestle } from '@/components/new/three/models/about/laboratoire/final_render/Trestle'

import { default as laboratoireFinalRenderConstants } from '@/constants/new/canvas/laboratoire/laboratoireFinalRenderConstants.json'

export default function DeskCollection() {
  return (
    <>
      <Trestle
        position={
          new THREE.Vector3(
            laboratoireFinalRenderConstants.DESK_COLLECTION.TRESTLES.LEFT.POSITION.X,
            laboratoireFinalRenderConstants.DESK_COLLECTION.TRESTLES.LEFT.POSITION.Y,
            laboratoireFinalRenderConstants.DESK_COLLECTION.TRESTLES.LEFT.POSITION.Z,
          )
        }
      />
      <Trestle
        position={
          new THREE.Vector3(
            laboratoireFinalRenderConstants.DESK_COLLECTION.TRESTLES.RIGHT.POSITION.X,
            laboratoireFinalRenderConstants.DESK_COLLECTION.TRESTLES.RIGHT.POSITION.Y,
            laboratoireFinalRenderConstants.DESK_COLLECTION.TRESTLES.RIGHT.POSITION.Z,
          )
        }
      />
    </>
  )
}
