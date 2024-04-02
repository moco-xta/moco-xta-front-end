import * as THREE from 'three'
import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoPython_1: THREE.Mesh
    LogoPython_2: THREE.Mesh
  }
  materials: {
    ['logo_python_#fdd94b']: THREE.MeshStandardMaterial
    ['logo_python_#3771a1']: THREE.MeshStandardMaterial
  }
}

export const LogoPython = forwardRef<
  THREE.Group<THREE.Object3DEventMap>,
  JSX.IntrinsicElements['group']
>(function LogoPython({}, ref) {
  const { nodes, materials } = useGLTF(GltfConstants.LOGO_PYTHON) as GLTFResult
  return (
    <group
      ref={ref}
      dispose={null}
      position={[18, 6, 0]}
    >
      <mesh
        geometry={nodes.LogoPython_1.geometry}
        material={materials['logo_python_#fdd94b']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.LogoPython_2.geometry}
        material={materials['logo_python_#3771a1']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.LOGO_PYTHON)
