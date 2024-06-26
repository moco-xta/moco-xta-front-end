import React from 'react'

import DeskCollection from './collections/desk_collection/DeskCollection'
import Lights from './Lights'
import ParquetCollection from './collections/parquet_collection/ParquetCollection'
import WallsCollection from './collections/walls_collection/WallsCollection'
import PostProcessing from './PostProcessing'

export default function LaboratoireFinalRender() {
  return (
    <>
      <DeskCollection />
      <Lights />
      <ParquetCollection />
      <WallsCollection />
      {/* <PostProcessing /> */}
    </>
  )
}
