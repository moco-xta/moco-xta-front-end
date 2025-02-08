import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

import { metroParisBlue } from '../../materials/contact/contactMaterials'

const Paris = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes } = useGLTF(glbConstants.CONTACT.PARIS) as GLTFResult

  return (
    <group
      ref={ref}
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.Paris.geometry}
        material={metroParisBlue}
        castShadow
        receiveShadow
      />
    </group>
  )
})

Paris.displayName = 'Paris'

useGLTF.preload(glbConstants.CONTACT.PARIS)

export default Paris
