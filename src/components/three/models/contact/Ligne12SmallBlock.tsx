import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

import { ligne12Material } from '../../materials/contact/contactMaterials'

const Ligne12SmallBlock = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes } = useGLTF(glbConstants.CONTACT.LIGNE_12_SMALL_BLOCK) as GLTFResult

  return (
    <group
      ref={ref}
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.Ligne12SmallBlock.geometry}
        material={ligne12Material}
        castShadow
        receiveShadow
      />
    </group>
  )
})

Ligne12SmallBlock.displayName = 'Ligne12SmallBlock'

useGLTF.preload(glbConstants.CONTACT.LIGNE_12_SMALL_BLOCK)

export default Ligne12SmallBlock
