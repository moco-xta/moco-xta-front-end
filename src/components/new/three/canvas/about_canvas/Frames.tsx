import React from 'react'

import { AmorLlamaAmor } from '../../models/about/AmorLlamaAmor'
import { Brain } from '../../models/about/Brain'
import { Couronnes } from '../../models/about/Couronnes'
import { Trinity } from '../../models/about/Trinity'

export default function Frames() {
  return (
    <>
      <AmorLlamaAmor position={[-11.2, 10, -16]} />
      <Brain position={[-19.06, 10, -16]} />
      <Couronnes position={[0, 25.6, -16]} />
      <Trinity position={[-17.09, 19.2, -16]} />
    </>
  )
}
