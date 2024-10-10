import React, { useRef } from 'react'
import * as THREE from 'three'
import { Environment, Sky, useHelper } from '@react-three/drei'

import { Building001 } from '../../models/home/buildings/Building001'
import { Building002 } from '../../models/home/buildings/Building002'

import { default as imgConstants } from '@/constants/assets/imgConstants.json'
import { TruckRed } from '../../models/home/trucks/TruckRed'

const DirectionalLight = () => {
  const ref = useRef<THREE.DirectionalLight>(null!)
  // I want to attach  onClickEvent in this lightHelper.
  useHelper(ref, THREE.DirectionalLightHelper)

  return (
    <>
      <directionalLight
        ref={ref}
        intensity={2}
        position={[5, 5, 5]}
      />
    </>
  )
}

export default function HomeScene() {
  return (
    <>
      <Building001 />
      <Building002 />
      <TruckRed />
      <DirectionalLight />
      {/* <Sky
        turbidity={8}
        rayleigh={6}
        mieCoefficient={0.005}
        mieDirectionalG={0.8}
        sunPosition={[1, 0, 0]}
        distance={450000}
        inclination={0}
        azimuth={0}
      /> */}
      {/* <Environment files={imgConstants.HDRS.HOME_ENVIRONMENT} /> */}
    </>
  )
}
