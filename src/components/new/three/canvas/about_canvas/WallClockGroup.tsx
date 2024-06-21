import React, { useEffect, useState } from 'react'

import { HourHand } from '../../models/about/HourHand'
import { MinuteHand } from '../../models/about/MinuteHand'
import { SecondHand } from '../../models/about/SecondHand'
import { HourAndMinuteMarkers } from '../../models/about/HourAndMinuteMarkers'
import { WallClock } from '../../models/about/WallClock'
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
      <HourAndMinuteMarkers position={[-28.372, 25.4, -10.007]} />
      <HourHand
        date={date}
        position={[-28.366, 25.4, -10.007]}
      />
      <MinuteHand
        date={date}
        position={[-28.345, 25.4, -10.007]}
      />
      <SecondHand
        date={date}
        position={[-28.331, 25.4, -10.007]}
      />
      <WallClock position={[-28.583, 25.4, -10.007]} />
      <WallClockGlass position={[-28.583, 25.4, -10.007]} />
    </>
  )
}
