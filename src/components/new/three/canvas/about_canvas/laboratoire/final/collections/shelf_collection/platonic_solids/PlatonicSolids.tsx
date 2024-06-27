import React from 'react'
import * as THREE from 'three'

import { Cube } from '@/components/new/three/models/about/laboratoire/final_render/shelf_collection/platonic_solids/Cube'
import { Dodecahedron } from '@/components/new/three/models/about/laboratoire/final_render/shelf_collection/platonic_solids/Dodecahedron'
import { Icosahedron } from '@/components/new/three/models/about/laboratoire/final_render/shelf_collection/platonic_solids/Icosahedron'
import { Octahedron } from '@/components/new/three/models/about/laboratoire/final_render/shelf_collection/platonic_solids/Octahedron'
import { Tetrahedron } from '@/components/new/three/models/about/laboratoire/final_render/shelf_collection/platonic_solids/Tetrahedron'

import { default as laboratoireFinalRenderConstants } from '@/constants/new/canvas/about/laboratoire/laboratoireFinalRenderConstants.json'

export default function PlatonicSolids() {
  return (
    <>
      <Cube
        position={
          new THREE.Vector3(
            laboratoireFinalRenderConstants.SHELF_COLLECTION.PLATONIC_SOLIDS.CUBE.POSITION.X,
            laboratoireFinalRenderConstants.SHELF_COLLECTION.PLATONIC_SOLIDS.CUBE.POSITION.Y,
            laboratoireFinalRenderConstants.SHELF_COLLECTION.PLATONIC_SOLIDS.CUBE.POSITION.Z,
          )
        }
      />
      <Dodecahedron
        position={
          new THREE.Vector3(
            laboratoireFinalRenderConstants.SHELF_COLLECTION.PLATONIC_SOLIDS.DODECAHEDRON.POSITION.X,
            laboratoireFinalRenderConstants.SHELF_COLLECTION.PLATONIC_SOLIDS.DODECAHEDRON.POSITION.Y,
            laboratoireFinalRenderConstants.SHELF_COLLECTION.PLATONIC_SOLIDS.DODECAHEDRON.POSITION.Z,
          )
        }
      />
      <Icosahedron
        position={
          new THREE.Vector3(
            laboratoireFinalRenderConstants.SHELF_COLLECTION.PLATONIC_SOLIDS.ICOSAHEDRON.POSITION.X,
            laboratoireFinalRenderConstants.SHELF_COLLECTION.PLATONIC_SOLIDS.ICOSAHEDRON.POSITION.Y,
            laboratoireFinalRenderConstants.SHELF_COLLECTION.PLATONIC_SOLIDS.ICOSAHEDRON.POSITION.Z,
          )
        }
      />
      <Octahedron
        position={
          new THREE.Vector3(
            laboratoireFinalRenderConstants.SHELF_COLLECTION.PLATONIC_SOLIDS.OCTAHEDRON.POSITION.X,
            laboratoireFinalRenderConstants.SHELF_COLLECTION.PLATONIC_SOLIDS.OCTAHEDRON.POSITION.Y,
            laboratoireFinalRenderConstants.SHELF_COLLECTION.PLATONIC_SOLIDS.OCTAHEDRON.POSITION.Z,
          )
        }
      />
      <Tetrahedron
        position={
          new THREE.Vector3(
            laboratoireFinalRenderConstants.SHELF_COLLECTION.PLATONIC_SOLIDS.TETRAHEDRON.POSITION.X,
            laboratoireFinalRenderConstants.SHELF_COLLECTION.PLATONIC_SOLIDS.TETRAHEDRON.POSITION.Y,
            laboratoireFinalRenderConstants.SHELF_COLLECTION.PLATONIC_SOLIDS.TETRAHEDRON.POSITION.Z,
          )
        }
      />
    </>
  )
}
