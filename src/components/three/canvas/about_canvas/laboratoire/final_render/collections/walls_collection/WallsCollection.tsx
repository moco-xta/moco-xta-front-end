import React from 'react'

import { Ceiling } from '@/components/three/models/about/laboratoire/final_render/walls_collection/Ceiling'
import DoorCollection from './door_collection/DoorCollection'
import FramesCollection from './frames_collection/FramesCollection'
import { NorthWall } from '@/components/three/models/about/laboratoire/final_render/walls_collection/NorthWall'
import WallClockCollection from './wall_clock_collection/WallClockCollection'
import { WestWall } from '@/components/three/models/about/laboratoire/final_render/walls_collection/WestWall'

export default function WallsCollection() {
  return (
    <>
      <Ceiling />
      <DoorCollection />
      <FramesCollection />
      <NorthWall />
      <WallClockCollection />
      <WestWall />
    </>
  )
}
