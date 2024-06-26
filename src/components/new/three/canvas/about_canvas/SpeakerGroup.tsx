import React from 'react'

import { WorldMap } from '../../models/about/WorldMap'
import { WorldMapStand } from '../../models/about/WorldMapStand'

export default function SpeakerGroup() {
  return (
    <>
      <WorldMap
        position={[-12.188, 12.685, -14.096]}
        rotation={[0, -Math.PI / 9, 0.262]}
      />
      <WorldMapStand
        position={[-12.2, 10.333, -14.1]}
        rotation={[0, Math.PI / 6, 0]}
      />
    </>
  )
}
