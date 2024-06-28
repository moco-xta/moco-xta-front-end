import React, { useEffect, useState } from 'react'
import * as THREE from 'three'

import { HourAndMinuteMarkers } from '@/components/new/three/models/about/laboratoire/final_render/walls_collection/wall_clock_collection/HourAndMinuteMarkers'
import { HourHand } from '@/components/new/three/models/about/laboratoire/final_render/walls_collection/wall_clock_collection/HourHand'
import { MinuteHand } from '@/components/new/three/models/about/laboratoire/final_render/walls_collection/wall_clock_collection/MinuteHand'
import { SecondHand } from '@/components/new/three/models/about/laboratoire/final_render/walls_collection/wall_clock_collection/SecondHand'
import { WallClock } from '@/components/new/three/models/about/laboratoire/final_render/walls_collection/wall_clock_collection/WallClock'
import { WallClockGlass } from '@/components/new/three/models/about/laboratoire/final_render/walls_collection/wall_clock_collection/WallClockGlass'

import { default as laboratoireFinalRenderConstants } from '@/constants/new/canvas/about/laboratoire/laboratoireFinalRenderConstants.json'

export default function WallClockCollection() {
  const [date, setDate] = useState<Date>(new Date())

  const getTime = setInterval(() => {
    setDate(new Date())
  }, 1000)

  useEffect(() => {
    return () => clearInterval(getTime)
  }, [getTime])

  return (
    <group
      position={
        new THREE.Vector3(
          laboratoireFinalRenderConstants.WALLS_COLLECTION.WALL_CLOCK_COLLECTION.WALL_CLOCK.POSITION.X,
          laboratoireFinalRenderConstants.WALLS_COLLECTION.WALL_CLOCK_COLLECTION.WALL_CLOCK.POSITION.Y,
          laboratoireFinalRenderConstants.WALLS_COLLECTION.WALL_CLOCK_COLLECTION.WALL_CLOCK.POSITION.Z,
        )
      }
    >
      <HourAndMinuteMarkers />
      <HourHand date={date} />
      <MinuteHand date={date} />
      <SecondHand date={date} />
      <WallClock />
      <WallClockGlass />
    </group>
  )
}
