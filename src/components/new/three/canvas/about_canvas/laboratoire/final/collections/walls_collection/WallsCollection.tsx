import React from 'react'

import { Ceiling } from '@/components/new/three/models/about/laboratoire/final_render/walls_collection/Ceiling'
import DoorCollection from './door_collection/DoorCollection'
import FramesCollection from './frames_collection/FramesCollection'
import { NorthWall } from '@/components/new/three/models/about/laboratoire/final_render/walls_collection/NorthWall'
import { WestWall } from '@/components/new/three/models/about/laboratoire/final_render/walls_collection/WestWall'

export default function WallsCollection() {
  return (
    <>
      <Ceiling />
      <DoorCollection />
      <FramesCollection />
      <NorthWall />
      <WestWall />
    </>
  )
}
