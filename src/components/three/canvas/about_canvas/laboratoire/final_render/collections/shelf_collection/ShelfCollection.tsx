import React from 'react'
import * as THREE from 'three'

import { PabloEscobar } from '@/components/three/models/about/laboratoire/final_render/shelf_collection/PabloEscobar'
import PlatonicSolids from './platonic_solids/PlatonicSolids'
import { Shelf } from '@/components/three/models/about/laboratoire/final_render/shelf_collection/Shelf'
import { VirgenDeGuadalupe } from '@/components/three/models/about/laboratoire/final_render/shelf_collection/VirgenDeGuadalupe'

import { default as laboratoireFinalRenderConstants } from '@/constants/three/about/laboratoire/laboratoireFinalRenderConstants.json'

export default function ShelfCollection() {
  return (
    <>
      <PabloEscobar
        position={
          new THREE.Vector3(
            laboratoireFinalRenderConstants.SHELF_COLLECTION.PABLO_ESCOBAR.POSITION.X,
            laboratoireFinalRenderConstants.SHELF_COLLECTION.PABLO_ESCOBAR.POSITION.Y,
            laboratoireFinalRenderConstants.SHELF_COLLECTION.PABLO_ESCOBAR.POSITION.Z,
          )
        }
      />
      <PlatonicSolids />
      <Shelf
        position={
          new THREE.Vector3(
            laboratoireFinalRenderConstants.SHELF_COLLECTION.SHELF.POSITION.X,
            laboratoireFinalRenderConstants.SHELF_COLLECTION.SHELF.POSITION.Y,
            laboratoireFinalRenderConstants.SHELF_COLLECTION.SHELF.POSITION.Z,
          )
        }
      />
      <VirgenDeGuadalupe
        position={
          new THREE.Vector3(
            laboratoireFinalRenderConstants.SHELF_COLLECTION.VIRGEN_DE_GUADALUPE.POSITION.X,
            laboratoireFinalRenderConstants.SHELF_COLLECTION.VIRGEN_DE_GUADALUPE.POSITION.Y,
            laboratoireFinalRenderConstants.SHELF_COLLECTION.VIRGEN_DE_GUADALUPE.POSITION.Z,
          )
        }
      />
    </>
  )
}
