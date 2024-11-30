import React, { useRef } from 'react'
import Portrait from './federico/Portrait'

export default function Federico() {
  const federicoGroupRef = useRef<THREE.Group>(null!)

  return (
    <group ref={federicoGroupRef}>
      <Portrait />
    </group>
  )
}
