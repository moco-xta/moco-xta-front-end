import React from 'react'

import DoorGroup from './DoorGroup'
import Frames from './Frames'
import { NorthBaseboard } from '../../models/about/NorthBaseboard'
import { NorthWall } from '../../models/about/NorthWall'
import { WestBaseboard } from '../../models/about/WestBaseboard'
import { WestWall } from '../../models/about/WestWall'

export default function Walls() {
  return (
    <>
      <DoorGroup />
      <Frames />
      <NorthBaseboard />
      <NorthWall />
      <WestBaseboard />
      <WestWall />
    </>
  )
}
