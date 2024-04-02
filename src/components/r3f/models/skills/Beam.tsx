import React, { forwardRef, useRef } from 'react'

import { Reflect } from './Reflect'

interface BeamInterface {
  children: any
  bounce: number
  far: number
}

export const Beam = forwardRef<BeamInterface, any>(function Beam(
  { children, bounce, far },
  ref,
) {
  const reflectRef = useRef(null)

  return (
    <Reflect
      ref={reflectRef}
      bounce={bounce}
      far={far}
    >
      {children}
    </Reflect>
  )
})
