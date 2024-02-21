import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

const IconAnsible = forwardRef(function IconAnsible(props, ref) {
  const { nodes, materials } = useGLTF(GltfConstants.ICON_ANSIBLE)
  return (
    <group
      ref={ref}
      dispose={null}
      position={[37, 0, 0]}
    >
      <mesh
        geometry={nodes.IconAnsible_1.geometry}
        material={materials['icon_ansible_#000000']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.IconAnsible_2.geometry}
        material={materials['icon_ansible_#ffffff']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.ICON_ANSIBLE)

export default IconAnsible
