import React from 'react'
import * as THREE from 'three'

import { AmorLlamaAmor } from '@/components/new/three/models/about/laboratoire/final_render/walls_collection/frames_collection/AmorLlamaAmor'
import { Brain } from '@/components/new/three/models/about/laboratoire/final_render/walls_collection/frames_collection/Brain'
import { Trinity } from '@/components/new/three/models/about/laboratoire/final_render/walls_collection/frames_collection/Trinity'

import { default as laboratoireFinalRenderConstants } from '@/constants/new/canvas/laboratoire/laboratoireFinalRenderConstants.json'

export default function FramesCollection() {
  return (
    <>
      <AmorLlamaAmor
        position={
          new THREE.Vector3(
            laboratoireFinalRenderConstants.WALLS_COLLECTION.FRAMES_COLLECTION.AMOR_LLAMA_AMOR.POSITION.X,
            laboratoireFinalRenderConstants.WALLS_COLLECTION.FRAMES_COLLECTION.AMOR_LLAMA_AMOR.POSITION.Y,
            laboratoireFinalRenderConstants.WALLS_COLLECTION.FRAMES_COLLECTION.AMOR_LLAMA_AMOR.POSITION.Z,
          )
        }
      />
      <Brain
        position={
          new THREE.Vector3(
            laboratoireFinalRenderConstants.WALLS_COLLECTION.FRAMES_COLLECTION.BRAIN.POSITION.X,
            laboratoireFinalRenderConstants.WALLS_COLLECTION.FRAMES_COLLECTION.BRAIN.POSITION.Y,
            laboratoireFinalRenderConstants.WALLS_COLLECTION.FRAMES_COLLECTION.BRAIN.POSITION.Z,
          )
        }
      />
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
