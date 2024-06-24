import React from 'react'

import Desk from './Desk'
import Parquet from '../../models/about/Parquet'
import ShelfGroup from './ShelfGroup'
import Socials from './Socials'
import SpeakerGroup from './SpeakerGroup'
import WallsGroup from './WallsGroup'

export default function LaboratoireFinalRender() {
  return (
    <>
      <Desk />
      <Parquet />
      <ShelfGroup />
      <Socials />
      <SpeakerGroup />
      <WallsGroup />
    </>
  )
}
