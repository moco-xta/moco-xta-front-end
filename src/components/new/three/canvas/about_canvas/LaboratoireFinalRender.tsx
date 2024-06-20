import React from 'react'

import Desk from './Desk'
import Parquet from '../../models/about/Parquet'
import ShelfGroup from './ShelfGroup'
import WallsGroup from './WallsGroup'

export default function LaboratoireFinalRender() {
  return (
    <>
      <Desk />
      <Parquet />
      <ShelfGroup />
      <WallsGroup />
    </>
  )
}
