import React from 'react'

import { Couronnes } from '../../models/laboratory/Couronnes'
import { Cube } from '../../models/laboratory/Cube'
import { DeskChair } from '../../models/laboratory/DeskChair'
import { DeskTray } from '../../models/laboratory/DeskTray'
import { Dodecahedron } from '../../models/laboratory/Dodecahedron'
import { Door } from '../../models/laboratory/Door'
import { DoorFrame } from '../../models/laboratory/DoorFrame'
import { Icosahedron } from '../../models/laboratory/Icosahedron'
import { MacBookPro } from '../../models/laboratory/MacBookPro'
import { Octahedron } from '../../models/laboratory/Octahedron'
import { PabloEscobar } from '../../models/laboratory/PabloEscobar'
import Parquet from '../../models/laboratory/Parquet'
import { Screen } from '../../models/laboratory/Screen'
import { ShelfDesk } from '../../models/laboratory/ShelfDesk'
import { Tetrahedron } from '../../models/laboratory/Tetrahedron'
import { Trestle } from '../../models/laboratory/Trestle'
import { VirgenDeGuadalupe } from '../../models/laboratory/VirgenDeGuadalupe'
import WallClockGroup from './WallClockGroup'
import { SpeakerBox } from '../../models/laboratory/SpeakerBox'
import { Walls } from '../../models/laboratory/Walls'

import { laboratoryData } from '@/data/about/three/laboratoryData'

export default function LaboratoryScene() {
  return (
    <>
      <Couronnes />
      <Cube />
      <DeskChair />
      <DeskTray />
      <Dodecahedron />
      <Door />
      <DoorFrame />
      <Icosahedron />
      <MacBookPro />
      <Octahedron />
      <PabloEscobar />
      <Parquet />
      <Screen />
      <ShelfDesk />
      {laboratoryData.speakerBoxes.map((speakerBoxData) => (
        <SpeakerBox
          key={`speaker_box_${speakerBoxData.name}`}
          {...speakerBoxData}
        />
      ))}
      <Tetrahedron />
      {laboratoryData.trestles.map((trestleData) => (
        <Trestle
          key={`trestle_${trestleData.name}`}
          {...trestleData}
        />
      ))}
      <VirgenDeGuadalupe />
      <WallClockGroup />
      <Walls />
    </>
  )
}
