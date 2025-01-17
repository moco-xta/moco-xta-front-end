import React from 'react'
import DirectionalLights from './DirectionalLights'

export default function Lightning() {
  return (
    <>
      <ambientLight intensity={1} />
      <DirectionalLights />
    </>
  )
}
