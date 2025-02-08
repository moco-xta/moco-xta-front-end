import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

import { ligne12Material, metroParisWhite } from '../../materials/contact/contactMaterials'

const Ligne12 = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes } = useGLTF(glbConstants.CONTACT.LIGNE_12) as GLTFResult

  return (
    <group
      ref={ref}
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.Ligne12_1.geometry}
        material={ligne12Material}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.Ligne12_2.geometry}
        material={metroParisWhite}
        castShadow
        receiveShadow
      />
    </group>
  )
})

Ligne12.displayName = 'Ligne12'

useGLTF.preload(glbConstants.CONTACT.LIGNE_12)

export default Ligne12
