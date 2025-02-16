import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

import { metroParisBlue } from '../../materials/contact/contactMaterials'

const StationMarcadetPoissonniers = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>(
  (props, ref) => {
    const { nodes } = useGLTF(glbConstants.CONTACT.STATION_MARCADET_POISSONNIERS) as GLTFResult

    return (
      <group
        ref={ref}
        {...props}
        dispose={null}
      >
        <mesh
          geometry={nodes.StationMarcadetPoissonniers.geometry}
          material={metroParisBlue}
          castShadow
          receiveShadow
        />
      </group>
    )
  },
)

StationMarcadetPoissonniers.displayName = 'StationMarcadetPoissonniers'

useGLTF.preload(glbConstants.CONTACT.STATION_MARCADET_POISSONNIERS)

export default StationMarcadetPoissonniers
