import React from 'react'
import * as THREE from 'three'

import { Door } from '@/components/new/three/models/about/laboratoire/final_render/walls_collection/door_collection/Door'
import { DoorFrame } from '@/components/new/three/models/about/laboratoire/final_render/walls_collection/door_collection/DoorFrame'

import { default as laboratoireFinalRenderConstants } from '@/constants/new/canvas/laboratoire/laboratoireFinalRenderConstants.json'

export default function DoorCollection() {
  return (
    <>
      <Door
        position={
          new THREE.Vector3(
            laboratoireFinalRenderConstants.WALLS_COLLECTION.DOOR_COLLECTION.DOOR.POSITION.X,
            laboratoireFinalRenderConstants.WALLS_COLLECTION.DOOR_COLLECTION.DOOR.POSITION.Y,
            laboratoireFinalRenderConstants.WALLS_COLLECTION.DOOR_COLLECTION.DOOR.POSITION.Z,
          )
        }
      />
      <DoorFrame
        position={
          new THREE.Vector3(
            laboratoireFinalRenderConstants.WALLS_COLLECTION.DOOR_COLLECTION.DOOR_FRAME.POSITION.X,
            laboratoireFinalRenderConstants.WALLS_COLLECTION.DOOR_COLLECTION.DOOR_FRAME.POSITION.Y,
            laboratoireFinalRenderConstants.WALLS_COLLECTION.DOOR_COLLECTION.DOOR_FRAME.POSITION.Z,
          )
        }
      />
    </>
  )
}
