import React from 'react'

import { SpeakerBox } from '../../models/about/SpeakerBox'
import { WorldMap } from '../../models/about/WorldMap'
import { WorldMapStand } from '../../models/about/WorldMapStand'

export default function SpeakerGroup() {
  return (
    <>
      <SpeakerBox position={[-12.2749, 0.02, -14.2514]} />
      <SpeakerBox position={[12.7251, 0.02, -14.3251]} />
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
