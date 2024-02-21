import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

const IconNextjs = forwardRef(function IconNextjs(props, ref) {
  const { nodes, materials } = useGLTF(GltfConstants.ICON_NEXTJS)
  return (
    <group
    ref={ref}
      dispose={null}
      position={[11.5, 0, 0]}
    >
      <mesh
        geometry={nodes.IconNextjs.geometry}
        material={materials['icon_nextjs_#ffffff']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.ICON_NEXTJS)

export default IconNextjs