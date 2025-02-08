import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

import { ligne12Material, metroParisWhite } from '../../materials/contact/contactMaterials'

const DotOutlined = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes } = useGLTF(glbConstants.CONTACT.DOT_OUTLINED) as GLTFResult

  return (
    <group
      ref={ref}
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.DotOutlined_1.geometry}
        material={ligne12Material}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.DotOutlined_2.geometry}
        material={metroParisWhite}
        castShadow
        receiveShadow
      />
    </group>
  )
})

DotOutlined.displayName = 'DotOutlined'

useGLTF.preload(glbConstants.CONTACT.DOT_OUTLINED)

export default DotOutlined
