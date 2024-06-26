import React, { useEffect, useState } from 'react'

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
      <WallClockGlass position={[-28.583, 25.4, -10.007]} />
    </>
  )
}
