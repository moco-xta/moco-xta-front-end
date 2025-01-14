import React from 'react'

import { Couronnes } from '../../models/laboratory/Couronnes'
import { Cube } from '../../models/laboratory/Cube'
import { DeskTray } from '../../models/laboratory/DeskTray'
import { Dodecahedron } from '../../models/laboratory/Dodecahedron'
import { Icosahedron } from '../../models/laboratory/Icosahedron'
import { Octahedron } from '../../models/laboratory/Octahedron'
import { PabloEscobar } from '../../models/laboratory/PabloEscobar'
import Parquet from '../../models/laboratory/Parquet'
import { ShelfDesk } from '../../models/laboratory/ShelfDesk'
import { Trestle } from '../../models/laboratory/Trestle'
import { VirgenDeGuadalupe } from '../../models/laboratory/VirgenDeGuadalupe'
import { LaboratoryData } from '@/data/about/three/laboratoryData'
import WallClockGroup from './WallClockGroup'

export default function LaboratoryScene() {
  return (
    <>
      <Couronnes />
      <Cube />
      <DeskTray />
      <Dodecahedron />
      <Icosahedron />
      <Octahedron />
      <PabloEscobar />
      <Parquet />
      <ShelfDesk />
      {LaboratoryData.trestles.map((trestle) => (
        <Trestle
          key={`trestle_${trestle.name}`}
          {...trestle}
        />
      ))}
      <VirgenDeGuadalupe />
      <WallClockGroup />
    </>
  )
}
