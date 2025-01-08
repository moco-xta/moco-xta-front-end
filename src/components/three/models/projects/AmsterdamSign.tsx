import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    AmsterdamSign: THREE.Mesh
  }
  materials: {
    material_amsterdam_sign: THREE.MeshStandardMaterial
  }
}

export function AmsterdamSign(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(glbConstants.PROJECTS.AMSTERDAM_SIGN) as GLTFResult
  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.AmsterdamSign.geometry}
        material={materials.material_amsterdam_sign}
        castShadow
        receiveShadow
      />
    </group>
  )
}

useGLTF.preload(glbConstants.PROJECTS.AMSTERDAM_SIGN)
