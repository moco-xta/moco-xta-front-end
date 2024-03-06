import React from 'react'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

export function LogoReactThreeDrei({ position, scale}) {
  const { nodes, materials } = useGLTF(GltfConstants.LOGO_REACT_THREE_DREI)
  return (
    <group position={position} scale={scale}>
      <mesh geometry={nodes.LogoReactThreeDrei_1.geometry} material={materials['logo_react_three_drei_#000000.001']} />
      <mesh geometry={nodes.LogoReactThreeDrei_2.geometry} material={materials['logo_react_three_drei_#f00055']} />
    </group>
  )
}

useGLTF.preload(GltfConstants.LOGO_REACT_THREE_DREI)
