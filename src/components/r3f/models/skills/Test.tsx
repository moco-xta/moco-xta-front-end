import React, { useRef } from 'react'

import { Beam } from './Beam'

export default function Test() {
  const boxreflect = useRef(null)

  return (
    <Beam
      ref={boxreflect}
      bounce={10}
      far={20}
    />
  )
}
