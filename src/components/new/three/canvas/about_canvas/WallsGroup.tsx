import React from 'react'

import { Ceiling } from '../../models/about/Ceiling'
import DoorGroup from './DoorGroup'
import Frames from './Frames'
import { NorthWall } from '../../models/about/NorthWall'
import WallClockGroup from './WallClockGroup'
import { WestWall } from '../../models/about/WestWall'

export default function WallsGroup() {
  return (
    <>
      <Ceiling />
      <DoorGroup />
      <Frames />
      <NorthWall />
      <WallClockGroup />
      <WestWall />
      {/* <NorthBaseboard />
      <WestBaseboard /> */}
      {/* <Walls /> */}
    </>
  )
}
