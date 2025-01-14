import React, { useEffect, useState } from 'react'
import * as THREE from 'three'

import { HourAndMinuteMarkers } from '@/components/three/models/laboratory/HourAndMinuteMarkers'
import { HourHand } from '@/components/three/models/laboratory/HourHand'
import { MinuteHand } from '@/components/three/models/laboratory/MinuteHand'
import { SecondHand } from '@/components/three/models/laboratory/SecondHand'
import { WallClock } from '@/components/three/models/laboratory/WallClock'
import { WallClockGlass } from '@/components/three/models/laboratory/WallClockGlass'

export default function WallClockGroup() {
  const [date, setDate] = useState<Date>(new Date())

  const getTime = setInterval(() => {
    setDate(new Date())
  }, 1000)

  useEffect(() => {
    return () => clearInterval(getTime)
  }, [getTime])

  return (
    <group position={new THREE.Vector3(-28.331, 25.4, -10.007)}>
      <HourAndMinuteMarkers />
      <HourHand date={date} />
      <MinuteHand date={date} />
      <SecondHand date={date} />
      <WallClock />
      {/* <WallClockGlass /> */}
    </group>
  )
}
