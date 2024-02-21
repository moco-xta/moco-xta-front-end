import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

const IconBlender = forwardRef(function IconBlender(props, ref) {
  const { nodes, materials } = useGLTF(GltfConstants.ICON_BLENDER)
  return (
    <group
      ref={ref}
      dispose={null}
      position={[0, 0, 0]}
    >
      <mesh
        geometry={nodes.IconBlender_1.geometry}
        material={materials['icon_blender_#265787']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.IconBlender_2.geometry}
        material={materials['icon_blender_#ea7600']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.IconBlender_3.geometry}
        material={materials['icon_blender_#ffffff']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.ICON_BLENDER)

export default IconBlender