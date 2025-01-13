import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Trestle: THREE.Mesh
  }
  materials: {
    Material: THREE.MeshStandardMaterial
  }
}

export function Trestle(props: JSX.IntrinsicElements['mesh']) {
  const { nodes, materials } = useGLTF(glbConstants.LABORATORY.TRESTLE) as GLTFResult

  return (
    <mesh
      geometry={nodes.Trestle.geometry}
      material={materials.Material}
      receiveShadow
      castShadow
      {...props}
    />
  )
}

useGLTF.preload(glbConstants.LABORATORY.TRESTLE)
