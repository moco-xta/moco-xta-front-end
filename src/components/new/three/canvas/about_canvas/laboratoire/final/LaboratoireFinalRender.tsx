import React from 'react'

import DeskCollection from './collections/desk_collection/DeskCollection'
import Lights from './Lights'
import ParquetCollection from './collections/parquet_collection/ParquetCollection'
import SpeakersCollections from './collections/speakers_collection/SpeakersCollections'
import WallsCollection from './collections/walls_collection/WallsCollection'
import PostProcessing from './PostProcessing'
import ShelfCollection from './collections/shelf_collection/ShelfCollection'

export default function LaboratoireFinalRender() {
  return (
    <>
      <DeskCollection />
      <Lights />
      <ParquetCollection />
      <ShelfCollection />
      <SpeakersCollections />
      <WallsCollection />
      {/* <PostProcessing /> */}
    </>
  )
}
