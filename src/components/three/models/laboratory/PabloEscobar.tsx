import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    PabloEscobar: THREE.Mesh
  }
  materials: {
    material_pablo_escobar: THREE.MeshStandardMaterial
  }
}

export function PabloEscobar(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(glbConstants.LABORATORY.PABLO_ESCOBAR) as GLTFResult

  return (
    <group
      position={[4.936, 18.127, -15.546]}
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.PabloEscobar.geometry}
        material={materials.material_pablo_escobar}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(glbConstants.LABORATORY.PABLO_ESCOBAR)
