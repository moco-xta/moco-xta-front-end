import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

import {
  metroParisBlue,
  metroParisDarkBrown,
  metroParisWhite,
} from '../../materials/contact/contactMaterials'

const StationAbbesses = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes } = useGLTF(glbConstants.CONTACT.STATION_ABBESSES) as GLTFResult

  return (
    <group
      ref={ref}
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.StationAbbesses_1.geometry}
        material={metroParisBlue}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.StationAbbesses_2.geometry}
        castShadow
        receiveShadow
        material={metroParisDarkBrown}
      />
      <mesh
        geometry={nodes.StationAbbesses_3.geometry}
        material={metroParisWhite}
        castShadow
        receiveShadow
      />
    </group>
  )
})

StationAbbesses.displayName = 'StationAbbesses'

useGLTF.preload(glbConstants.CONTACT.STATION_ABBESSES)

export default StationAbbesses
