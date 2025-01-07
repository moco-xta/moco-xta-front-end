import React from 'react'

import Cubes from './Cubes'
import { MinecraftGround } from '../../models/minecraft/MinecraftGround'
// import Ground from './Ground'

export default function MinecraftScene() {
  return (
    <>
      <Cubes />
      {/* <Ground /> */}
      <MinecraftGround />
    </>
  )
}
