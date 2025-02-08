import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

import { ligne12Material } from '../../materials/contact/contactMaterials'

const Dot = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes } = useGLTF(glbConstants.CONTACT.DOT) as GLTFResult

  return (
    <group
      ref={ref}
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.Dot.geometry}
        material={ligne12Material}
        castShadow
        receiveShadow
      />
    </group>
  )
})

Dot.displayName = 'Dot'

useGLTF.preload(glbConstants.CONTACT.DOT)

export default Dot
