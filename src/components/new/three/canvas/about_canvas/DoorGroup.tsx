import React from 'react'

import { Door } from '../../models/about/Door'
import { DoorFrame } from '../../models/about/DoorFrame'

export default function DoorGroup() {
  return (
    <>
      <Door position={[-28.6, 0, -10]} />
      <DoorFrame position={[-28.6, 0, -10]} />
    </>
  )
}
