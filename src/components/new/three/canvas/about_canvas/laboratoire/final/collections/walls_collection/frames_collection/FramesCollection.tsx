import React from 'react'
import * as THREE from 'three'

import { Trinity } from '@/components/new/three/models/about/laboratoire/final_render/walls_collection/frames_collection/Trinity'

import { default as laboratoireFinalRenderConstants } from '@/constants/new/canvas/laboratoire/laboratoireFinalRenderConstants.json'

export default function FramesCollection() {
  return (
    <>
      <Trinity
        position={
          new THREE.Vector3(
            laboratoireFinalRenderConstants.WALLS_COLLECTION.FRAMES_COLLECTION.TRINITY.POSITION.X,
            laboratoireFinalRenderConstants.WALLS_COLLECTION.FRAMES_COLLECTION.TRINITY.POSITION.Y,
            laboratoireFinalRenderConstants.WALLS_COLLECTION.FRAMES_COLLECTION.TRINITY.POSITION.Z,
          )
        }
      />
    </>
  )
}
