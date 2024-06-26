import React, { useEffect, useState } from 'react'

import { HourAndMinuteMarkers } from '../../models/about/laboratoire/final_render/walls_collection/wall_clock_collection/HourAndMinuteMarkers'
import { WallClock } from '../../models/about/laboratoire/final_render/walls_collection/wall_clock_collection/WallClock'
import { WallClockGlass } from './WallClockGlass'

export default function WallClockGroup() {
  const [date, setDate] = useState<Date>(new Date())

  const getTime = setInterval(() => {
    setDate(new Date())
  }, 1000)

  useEffect(() => {
    return () => clearInterval(getTime)
  }, [getTime])

  return (
    <>
      <WallClock position={[-28.583, 25.4, -10.007]} />
      <WallClockGlass position={[-28.583, 25.4, -10.007]} />
    </>
  )
}
