import React from 'react'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

export function IconGsap(props) {
  const { nodes, materials } = useGLTF(GltfConstants.ICON_GSAP)
  return (
    <group
      {...props}
      dispose={null}
      position={[9, 0, 0]}
    >
      <mesh
        geometry={nodes.IconGsap.geometry}
        material={materials['icon_gsap_#87cf01']}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(GltfConstants.ICON_GSAP)
