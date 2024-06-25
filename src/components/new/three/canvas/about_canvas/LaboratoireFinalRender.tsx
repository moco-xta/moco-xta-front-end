import React from 'react'

import Desk from './Desk'
import MinecraftScene from './minecraft/MinecraftScene'
import Parquet from '../../models/about/laboratoire/final_render/Parquet'
import ShelfGroup from './ShelfGroup'
import Socials from './Socials'
import SpeakerGroup from './SpeakerGroup'
import WallsGroup from './WallsGroup'

export default function LaboratoireFinalRender() {
  return (
    <>
      <Desk />
      <MinecraftScene />
      <Parquet />
      <ShelfGroup />
      <Socials />
      <SpeakerGroup />
      <WallsGroup />
    </>
  )
}
