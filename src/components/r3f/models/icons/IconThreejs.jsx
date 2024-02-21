import React from 'react'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

export function IconThreejs(props) {
  const { nodes, materials } = useGLTF(GltfConstants.ICON_THREEJS)
  return (
    <group
      {...props}
      dispose={null}
      position={[0, 0, 0]}
    >
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.IconThreejs_1.geometry}
          material={materials['icon_threejs_#ffffff']}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={nodes.IconThreejs_2.geometry}
          material={materials['icon_threejs_#000000']}
          receiveShadow
          castShadow
        />
      </group>
    </group>
  )
}

useGLTF.preload(GltfConstants.ICON_THREEJS)
