import React, { useRef } from 'react'

import Portrait from './Portrait'
import GobelinoComponent from './GobelinoConponent'
import LogoRCL from './LogoRCL'

interface FedericoInterface {
  timeline: GSAPTimeline
}

export default function Federico({ timeline }: FedericoInterface) {
  const federicoGroupRef = useRef<THREE.Group>(null!)

  return (
    <group ref={federicoGroupRef}>
      <Portrait timeline={timeline} />
      <GobelinoComponent timeline={timeline} />
      <LogoRCL timeline={timeline} />
    </group>
  )
}
