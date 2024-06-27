import React from 'react'

import DeskCollection from './collections/desk_collection/DeskCollection'
import LightsCollection from './collections/lights_collection/LightsCollection'
import ParquetCollection from './collections/parquet_collection/ParquetCollection'
import ShelfCollection from './collections/shelf_collection/ShelfCollection'
import SocialsCollection from './collections/socials_collection/SocialsCollection'
import SpeakersCollections from './collections/speakers_collection/SpeakersCollections'
import WallsCollection from './collections/walls_collection/WallsCollection'
import PostProcessing from './PostProcessing'

export default function LaboratoireFinalRender() {
  return (
    <>
      <DeskCollection />
      <LightsCollection />
      <ParquetCollection />
      <ShelfCollection />
      <SocialsCollection />
      <SpeakersCollections />
      <WallsCollection />
      {/* <PostProcessing /> */}
    </>
  )
}
