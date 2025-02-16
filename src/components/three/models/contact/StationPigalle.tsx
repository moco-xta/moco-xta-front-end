import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

import { metroParisBlue, metroParisWhite } from '../../materials/contact/contactMaterials'

const StationPigalle = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes } = useGLTF(glbConstants.CONTACT.STATION_PIGALLE) as GLTFResult

  return (
    <group
      ref={ref}
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.StationPigalle_1.geometry}
        material={metroParisBlue}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.StationPigalle_2.geometry}
        material={metroParisWhite}
        castShadow
        receiveShadow
      />
    </group>
  )
})

StationPigalle.displayName = 'StationPigalle'

useGLTF.preload(glbConstants.CONTACT.STATION_PIGALLE)

export default StationPigalle
