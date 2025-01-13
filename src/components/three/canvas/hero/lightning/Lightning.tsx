import React from 'react'

import AmbientLight from './AmbientLight'
import DirectionalLights from './DirectionalLights'

export default function Lightning() {
  return (
    <>
      <AmbientLight />
      <DirectionalLights />
    </>
  )
}
