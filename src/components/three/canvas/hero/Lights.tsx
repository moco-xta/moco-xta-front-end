import React from 'react'
import { Environment, Shadow } from '@react-three/drei'

import { default as imgConstants } from '@/constants/assets/imgConstants.json'

export default function Lights() {
  return (
    <>
      <ambientLight intensity={3} />
      <Environment
        files={imgConstants.ENVIRONMENTS.HDR.HERO_ENVIRONMENT}
        environmentIntensity={1.25}
      />
    </>
  )
}
