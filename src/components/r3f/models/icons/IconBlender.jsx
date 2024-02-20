import React from 'react'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

export function IconBlender(props) {
  const { nodes, materials } = useGLTF(GltfConstants.ICON_BLENDER)
  return (
    <group
      {...props}
      dispose={null}
      position={[3, 0, 0]}
    >
      <mesh
        geometry={nodes.Cylinder001_1.geometry}
        material={materials['icon_blender_#265787']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.Cylinder001_2.geometry}
        material={materials['icon_blender_#ea7600']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.Cylinder001_3.geometry}
        material={materials['icon_blender_#ffffff']}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(GltfConstants.ICON_BLENDER)
