import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

const IconThreejs = forwardRef(function IconThreejs(props, ref) {
  const { nodes, materials } = useGLTF(GltfConstants.ICON_THREEJS)
  return (
    <group
    ref={ref}
      dispose={null}
      position={[27, 0, 0]}
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
})

useGLTF.preload(GltfConstants.ICON_THREEJS)

export default IconThreejs