import React from 'react'
import * as THREE from 'three'

import PlatonicSolids from './platonic_solids/PlatonicSolids'
import { Shelf } from '@/components/new/three/models/about/laboratoire/final_render/shelf_collection/Shelf'

import { default as laboratoireFinalRenderConstants } from '@/constants/new/canvas/laboratoire/laboratoireFinalRenderConstants.json'

export default function ShelfCollection() {
  return (
    <>
      <PlatonicSolids />
      <Shelf
        position={new THREE.Vector3(
          laboratoireFinalRenderConstants.SHELF_COLLECTION.SHELF.POSITION.X,
          laboratoireFinalRenderConstants.SHELF_COLLECTION.SHELF.POSITION.Y,
          laboratoireFinalRenderConstants.SHELF_COLLECTION.SHELF.POSITION.Z,
        )}
      />
    </>
  )
}
