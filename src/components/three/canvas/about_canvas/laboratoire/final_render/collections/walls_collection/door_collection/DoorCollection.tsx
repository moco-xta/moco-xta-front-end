import React from 'react'
import * as THREE from 'three'

import { Door } from '@/components/three/models/about/laboratoire/final_render/walls_collection/door_collection/Door'
import { DoorFrame } from '@/components/three/models/about/laboratoire/final_render/walls_collection/door_collection/DoorFrame'
import { DoorHandle } from '@/components/three/models/about/laboratoire/final_render/walls_collection/door_collection/DoorHandle'

import { default as laboratoireFinalRenderConstants } from '@/constants/new/canvas/about/laboratoire/laboratoireFinalRenderConstants.json'

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
      <DoorHandle
        position={
          new THREE.Vector3(
            laboratoireFinalRenderConstants.WALLS_COLLECTION.DOOR_COLLECTION.DOOR_HANDLE.POSITION.X,
            laboratoireFinalRenderConstants.WALLS_COLLECTION.DOOR_COLLECTION.DOOR_HANDLE.POSITION.Y,
            laboratoireFinalRenderConstants.WALLS_COLLECTION.DOOR_COLLECTION.DOOR_HANDLE.POSITION.Z,
          )
        }
      />
    </>
  )
}
