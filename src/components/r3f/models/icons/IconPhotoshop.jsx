import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

const IconPhotoshop = forwardRef(function IconPhotoshop(props, ref) {
  const { nodes, materials } = useGLTF(GltfConstants.ICON_PHOTOSHOP)
  return (
    <group
    ref={ref}
      dispose={null}
      position={[0, 0, 0]}
    >
      <mesh
        geometry={nodes.IconPhotoshop_1.geometry}
        material={materials['icon_photoshop_#051e37']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.IconPhotoshop_2.geometry}
        material={materials['icon_photoshop_#39a9ff']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.ICON_PHOTOSHOP)

export default IconPhotoshop