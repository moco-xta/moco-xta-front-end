import React, { useCallback, useEffect, useState } from 'react'

import './index.scss'

export default function AboutTarget() {
  const [acceleration, setAcceleration] = useState<{x: number, y: number, z: number}>({
    x: 0,
    y: 0,
    z: 0
  })

  const handleDevicemotion = useCallback(
    (e: any) => {
      setAcceleration({
        x: e.acceleration.x,
        y: e.acceleration.y,
        z: e.acceleration.z
      })
    },
    [],
  )

  useEffect(() => {
    window.addEventListener('devicemotion', handleDevicemotion)
    return () => {
      window.removeEventListener('devicemotion', handleDevicemotion)
    }
  }, [handleDevicemotion])

  return (
    <div id='about_target_test_block'>
      <span id='about_target'>+</span>
      <p>TEST</p>
      <p>x: {acceleration.x}</p>
      <p>y: {acceleration.y}</p>
      <p>z: {acceleration.z}</p>
    </div>
  )
}
