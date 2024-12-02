import React, { useRef } from 'react'

import Portrait from './Portrait'
import GobelinoComponent from './GobelinoConponent'
import LogoRCL from './LogoRCL'

export default function Federico() {
  const federicoGroupRef = useRef<THREE.Group>(null!)

  return (
    <group ref={federicoGroupRef}>
      <Portrait />
      <GobelinoComponent />
      <LogoRCL />
    </group>
  )
}
