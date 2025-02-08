import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

import { metroParisBlue } from '../../materials/contact/contactMaterials'

const MMetroSmall = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes } = useGLTF(glbConstants.CONTACT.M_METRO_SMALL) as GLTFResult

  return (
    <group
      ref={ref}
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.MMetroSmall.geometry}
        material={metroParisBlue}
        castShadow
        receiveShadow
      />
    </group>
  )
})

MMetroSmall.displayName = 'MMetroSmall'

useGLTF.preload(glbConstants.CONTACT.M_METRO_SMALL)

export default MMetroSmall
