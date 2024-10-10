import React from 'react'
import { Environment, Sky } from '@react-three/drei'

import { Building001 } from '../../models/home/buildings/Building001'
import { Building002 } from '../../models/home/buildings/Building002'

import { default as imgConstants } from '@/constants/assets/imgConstants.json'

export default function HomeScene() {
  return (
    <>
      <Building001 />
      <Building002 />
      <Sky
        turbidity={8}
        rayleigh={6}
        mieCoefficient={0.005}
        mieDirectionalG={0.8}
        sunPosition={[1, 0, 0]}
        distance={450000}
        inclination={0}
        azimuth={0}
      />
      <Environment files={imgConstants.HDRS.HOME_ENVIRONMENT} />
    </>
  )
}
