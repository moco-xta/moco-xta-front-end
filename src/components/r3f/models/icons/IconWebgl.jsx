import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

const IconWebgl = forwardRef(function IconWebgl(props, ref) {
  const { nodes, materials } = useGLTF(GltfConstants.ICON_WEBGL)
  return (
    <group
    ref={ref}
      dispose={null}
      position={[24, 0, 0]}
    >
      <mesh
        geometry={nodes.IconWebgl.geometry}
        material={materials['icon_webgl_#990001']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.ICON_WEBGL)

export default IconWebgl