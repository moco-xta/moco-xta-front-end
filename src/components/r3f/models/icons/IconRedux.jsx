import React from 'react'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

export function IconRedux(props) {
  const { nodes, materials } = useGLTF(GltfConstants.ICON_REDUX)
  return (
    <group
      {...props}
      dispose={null}
      position={[12, 0, 0]}
    >
      <mesh
        geometry={nodes.IconRedux.geometry}
        material={materials['icon_redux_#764abc']}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(GltfConstants.ICON_REDUX)
