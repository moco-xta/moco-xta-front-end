import * as THREE from 'three'
import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoRedux: THREE.Mesh
  }
  materials: {
    ['icon_redux_#764abc']: THREE.MeshStandardMaterial
  }
}

export const LogoRedux = forwardRef<
  THREE.Group<THREE.Object3DEventMap>,
  JSX.IntrinsicElements['group']
>(function LogoRedux({}, ref) {
  const { nodes, materials } = useGLTF(GltfConstants.LOGO_REDUX) as GLTFResult
  return (
    <group
      ref={ref}
      dispose={null}
      position={[3, 12, 0]}
    >
      <mesh
        geometry={nodes.LogoRedux.geometry}
        material={materials['icon_redux_#764abc']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.LOGO_REDUX)
