import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

const IconSpringboot = forwardRef(function IconSpringboot(props, ref) {
  const { nodes, materials } = useGLTF(GltfConstants.ICON_SPRINGBOOT)
  return (
    <group
    ref={ref}
      dispose={null}
      position={[29.5, 0, 0]}
    >
      <mesh
        geometry={nodes.IconSpringboot_1.geometry}
        material={materials['icon_springboot_#68bd45']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.IconSpringboot_2.geometry}
        material={materials['icon_springboot_#ffffff']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.ICON_SPRINGBOOT)

export default IconSpringboot