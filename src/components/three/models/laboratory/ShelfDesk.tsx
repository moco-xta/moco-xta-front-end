import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    ShelfDesk: THREE.Mesh
  }
  materials: {
    shelf: THREE.MeshStandardMaterial
  }
}

export function ShelfDesk(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(glbConstants.LABORATORY.SHELF_DESK) as GLTFResult

  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.ShelfDesk.geometry}
        material={materials.shelf}
        position={[0, 18, -16]}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(glbConstants.LABORATORY.SHELF_DESK)
