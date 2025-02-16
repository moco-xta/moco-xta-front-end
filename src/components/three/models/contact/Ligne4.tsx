import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

import { ligne4Material, metroParisWhite } from '../../materials/contact/contactMaterials'

const Ligne4 = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes } = useGLTF(glbConstants.CONTACT.LIGNE_4) as GLTFResult

  return (
    <group
      ref={ref}
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.Ligne4_1.geometry}
        material={ligne4Material}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.Ligne4_2.geometry}
        material={metroParisWhite}
        castShadow
        receiveShadow
      />
    </group>
  )
})

Ligne4.displayName = 'Ligne4'

useGLTF.preload(glbConstants.CONTACT.LIGNE_4)

export default Ligne4
