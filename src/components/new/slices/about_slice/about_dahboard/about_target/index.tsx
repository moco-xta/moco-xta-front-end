import React, { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '@/redux/store'

import './index.scss'

export default function AboutTarget() {
  const { location } = useSelector((state: RootState) => state.about)

  const [acceleration, setAcceleration] = useState<{
    x: number
    y: number
    z: number
  }>({
    x: 0,
    y: 0,
    z: 0,
  })

  const handleDevicemotion = useCallback(
    (e: any) => {
      setAcceleration({
        x: e.acceleration.x > acceleration.x ? e.acceleration.x.toFixed(2) : acceleration.x,
        y: e.acceleration.y > acceleration.y ? e.acceleration.x.toFixed(2) : acceleration.y,
        z: e.acceleration.z > acceleration.z ? e.acceleration.x.toFixed(2) : acceleration.z,
      })
    },
    [acceleration.x, acceleration.y, acceleration.z],
  )

  useEffect(() => {
    window.addEventListener('devicemotion', handleDevicemotion)
    return () => {
      window.removeEventListener('devicemotion', handleDevicemotion)
    }
  }, [handleDevicemotion])

  /* return (
    <span id='about_target'>+</span>
  ) */

  return (
    <div id='about_target_test_block'>
      <span id='about_target'>+</span>
      <p>Latitude: {location.latitude}</p>
      <p>Longitude: {location.longitude}</p>
    </div>
  )
}
