import * as THREE from 'three'
import React from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/assets/gltfConstants.json'
import { default as texturesConstants } from '@/constants/assets/texturesConstants.json'
import { useLoader } from '@react-three/fiber'
import useTextureLoader from '@/hooks/useTextureLoader'

type GLTFResult = GLTF & {
  nodes: {
    Mesh_0: THREE.Mesh
  }
  materials: {
    Material_0: THREE.MeshStandardMaterial
  }
}

export function LiraTest001(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(gltfConstants.LIRA.LIRA_TEST_001) as GLTFResult

  /* materials.Material_0.transparent = true */
  /* materials.Material_0.opacity = 0.3 */
  /* materials.Material_0.emissiveIntensity = 3 */
  /* materials.Material_0.emissiveMap = useTextureLoader(texturesConstants.LIRA.LIRA_TEST_001) */

  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        name='Mesh_0'
        geometry={nodes.Mesh_0.geometry}
        material={materials.Material_0}
      />
    </group>
  )
}

useGLTF.preload(gltfConstants.LIRA.LIRA_TEST_001)
