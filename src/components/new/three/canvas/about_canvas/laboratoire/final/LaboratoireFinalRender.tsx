import React from 'react'

import DeskCollection from './collections/DeskCollection'
import Lights from './Lights'
import ParquetCollection from './collections/ParquetCollection'
import PostProcessing from './PostProcessing'

export default function LaboratoireFinalRender() {
  return (
    <>
      <DeskCollection />
      <Lights />
      <ParquetCollection />
      {/* <PostProcessing /> */}
    </>
  )
}
