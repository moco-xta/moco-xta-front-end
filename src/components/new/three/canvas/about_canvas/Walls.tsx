import React from 'react'

import Frames from './Frames'
import { NorthBaseboard } from '../../models/about/NorthBaseboard'
import { NorthWall } from '../../models/about/NorthWall'

export default function Walls() {
  return (
    <>
      <Frames />
      <NorthBaseboard />
      <NorthWall />
    </>
  )
}
