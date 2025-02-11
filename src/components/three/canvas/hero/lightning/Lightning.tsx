import React from 'react'
import { Environment } from '@react-three/drei'

// import AmbientLight from './AmbientLight'
// import DirectionalLights from './DirectionalLights'

import { default as imgConstants } from '@/constants/assets/imgConstants.json'

export default function Lightning() {
  return (
    <>
      {/* <AmbientLight /> */}
      <ambientLight intensity={2} />
      {/* <DirectionalLights /> */}
      <Environment
        files={imgConstants.HDRS.HERO_ENVIRONMENT}
        environmentIntensity={1.5}
      />
    </>
  )
}
