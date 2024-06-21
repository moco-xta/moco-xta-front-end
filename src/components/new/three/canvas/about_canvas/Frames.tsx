import React from 'react'

import { AmorLlamaAmor } from '../../models/about/AmorLlamaAmor'
import { Trinity } from '../../models/about/Trinity'

export default function Frames() {
  return (
    <>
      <AmorLlamaAmor position={[-11.2, 10, -16]} />
      <Trinity position={[-17.09, 19.2, -16]} />
    </>
  )
}
