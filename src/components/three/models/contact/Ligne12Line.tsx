import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

import { ligne12Material } from '../../materials/contact/contactMaterials'

const Ligne12Line = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes } = useGLTF(glbConstants.CONTACT.LIGNE_12_LINE) as GLTFResult

  return (
    <group
      ref={ref}
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.Ligne12Line.geometry}
        material={ligne12Material}
        castShadow
        receiveShadow
      />
    </group>
  )
})

Ligne12Line.displayName = 'Ligne12Line'

useGLTF.preload(glbConstants.CONTACT.LIGNE_12_LINE)

export default Ligne12Line
