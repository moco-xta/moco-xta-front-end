import React from 'react'

import DirectionalLights from './DirectionalLights'

export default function Lights() {
  return (
    <>
      <ambientLight intensity={1} />
      <DirectionalLights />
    </>
  )
}
