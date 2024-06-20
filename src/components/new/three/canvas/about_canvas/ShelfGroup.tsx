import React from 'react'

import { Shelf } from '../../models/about/Shelf'
import PlatonicSolids from './PlatonicSolids'
import { VirgenDeGuadalupe } from '../../models/about/VirgenDeGuadalupe'

export default function ShelfGroup() {
  return (
    <>
      <Shelf position={[0, 18, -16]} />
      <PlatonicSolids />
      <VirgenDeGuadalupe position={[-4.512, 18.127, -15.546]} />
    </>
  )
}
