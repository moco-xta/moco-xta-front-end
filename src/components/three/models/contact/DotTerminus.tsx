import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

import { ligne12Material, metroParisWhite } from '../../materials/contact/contactMaterials'

const DotTerminus = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes } = useGLTF(glbConstants.CONTACT.DOT_TERMINUS) as GLTFResult

  return (
    <group
      ref={ref}
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.DotTerminus_1.geometry}
        material={ligne12Material}
      />
      <mesh
        geometry={nodes.DotTerminus_2.geometry}
        material={metroParisWhite}
      />
    </group>
  )
})

DotTerminus.displayName = 'DotTerminus'

useGLTF.preload(glbConstants.CONTACT.DOT_TERMINUS)

export default DotTerminus
