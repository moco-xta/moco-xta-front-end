import React from 'react'

import { Couronnes } from '../../models/laboratory/Couronnes'
import { PabloEscobar } from '../../models/laboratory/PabloEscobar'
import { ShelfDesk } from '../../models/laboratory/ShelfDesk'
import { Trestle } from '../../models/laboratory/Trestle'
import { VirgenDeGuadalupe } from '../../models/laboratory/VirgenDeGuadalupe'
import { LaboratoryData } from '@/data/laboratory/three/laboratoryData'

export default function LaboratoryScene() {
  return (
    <>
      <Couronnes />
      <PabloEscobar />
      <ShelfDesk />
      {LaboratoryData.trestles.map((trestle) => (
        <Trestle
          key={`trestle_${trestle.name}`}
          {...trestle}
        />
      ))}
      <VirgenDeGuadalupe />
    </>
  )
}
