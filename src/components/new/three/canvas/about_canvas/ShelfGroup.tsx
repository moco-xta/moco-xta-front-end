import React from 'react'

import { Shelf } from '../../models/about/laboratoire/final_render/shelf_collection/Shelf'
import { PabloEscobar } from '../../models/about/PabloEscobar'
import PlatonicSolids from './PlatonicSolids'
import { VirgenDeGuadalupe } from '../../models/about/VirgenDeGuadalupe'

export default function ShelfGroup() {
  return (
    <>
      <Shelf position={[0, 18, -16]} />
      <PabloEscobar position={[4.936, 18.127, -15.546]} />
      <PlatonicSolids />
      <VirgenDeGuadalupe position={[-4.512, 18.127, -15.546]} />
    </>
  )
}
