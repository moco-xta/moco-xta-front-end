import React from 'react'

import { Ceiling } from '../../models/about/Ceiling'
import Frames from './Frames'
import WallClockGroup from './WallClockGroup'

export default function WallsGroup() {
  return (
    <>
      <Ceiling />
      <Frames />
      <WallClockGroup />
    </>
  )
}
