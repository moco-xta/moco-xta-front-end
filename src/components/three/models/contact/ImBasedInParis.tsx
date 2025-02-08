import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

import { ligne12Material } from '../../materials/contact/contactMaterials'

const ImBasedInParis = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes } = useGLTF(glbConstants.CONTACT.I_M_BASED_IN_PARIS) as GLTFResult

  return (
    <group
      ref={ref}
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.ImBasedInParis_1.geometry}
        material={ligne12Material}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.ImBasedInParis_2.geometry}
        material={ligne12Material}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.ImBasedInParis_3.geometry}
        material={ligne12Material}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.ImBasedInParis_4.geometry}
        material={ligne12Material}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.ImBasedInParis_5.geometry}
        material={ligne12Material}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.ImBasedInParis_6.geometry}
        material={ligne12Material}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.ImBasedInParis_7.geometry}
        material={ligne12Material}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.ImBasedInParis_8.geometry}
        material={ligne12Material}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.ImBasedInParis_9.geometry}
        material={ligne12Material}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.ImBasedInParis_10.geometry}
        material={ligne12Material}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.ImBasedInParis_11.geometry}
        material={ligne12Material}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.ImBasedInParis_12.geometry}
        material={ligne12Material}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.ImBasedInParis_13.geometry}
        material={ligne12Material}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.ImBasedInParis_14.geometry}
        material={ligne12Material}
        castShadow
        receiveShadow
      />
    </group>
  )
})

ImBasedInParis.displayName = 'ImBasedInParis'

useGLTF.preload(glbConstants.CONTACT.I_M_BASED_IN_PARIS)

export default ImBasedInParis
