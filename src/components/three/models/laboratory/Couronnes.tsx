import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Couronnes_1: THREE.Mesh
    Couronnes_2: THREE.Mesh
  }
  materials: {
    couronnes_border: THREE.MeshStandardMaterial
    couronnes_material: THREE.MeshStandardMaterial
  }
}

export function Couronnes(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(glbConstants.LABORATORY.COURONNES) as GLTFResult

  return (
    <group
      position={[0, 25.6, -16]}
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.Couronnes_1.geometry}
        material={materials.couronnes_border}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.Couronnes_2.geometry}
        material={materials.couronnes_material}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(glbConstants.LABORATORY.COURONNES)
