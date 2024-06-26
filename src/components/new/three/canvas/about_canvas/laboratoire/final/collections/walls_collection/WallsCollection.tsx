import React from 'react'

import DoorCollection from './door_collection/DoorCollection'
import { NorthWall } from '@/components/new/three/models/about/laboratoire/final_render/walls_collection/NorthWall'
import { WestWall } from '@/components/new/three/models/about/laboratoire/final_render/walls_collection/WestWall'

export default function WallsCollection() {
  return (
    <>
      <DoorCollection />
      <NorthWall />
      <WestWall />
    </>
  )
}
