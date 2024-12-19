import React from 'react'

import AmbientLight from './AmbientLight'
import DirectionalLights from './DirectionalLights'

export default function Lights() {
  return (
    <>
      <AmbientLight />
      <DirectionalLights />
    </>
  )
}
